/* global gapi */

import { CalendarItem } from "./CalendarItem";
import { WorkTimeBlock } from "./WorkTimeBlock";

/**
 * Client to interact with Google Calendar API.
 */
export class Calendar {
    #calendarId;
    #nextPageToken;
    #nextSyncToken;

    /**
     * Find the user's primary calendar and store its ID.
     */
    constructor(id) {
        this.#calendarId = id;
    }

    static async calendarFactory() {
        let id;

        await gapi.client.calendar.calendarList.list().then((response) => {
            for (let calendar of response.result.items) {
                if (calendar.primary) {
                    id = calendar.id;
                }
            }
        });

        return new Calendar(id);
    }


    /**
     * Gets CalendarItems for a given day.
     * @param {Number} year The year to get events for.
     * @param {Number} month The month to get events for.
     * @param {Number} day The day to get events for.
     * @returns {Array<CalendarItem>} An array of events for the given day.
     */
    async getItems(year, month, day) {
        let events = [];

        let timeMin = new Date(year, month - 1, day, 0, 0, 0, 0);
        let timeMax = new Date(year, month - 1, day, 23, 59, 59, 999);

        await gapi.client.calendar.events.list({
            calendarId: this.#calendarId,
            timeMin: timeMin.toISOString(),
            timeMax: timeMax.toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 2500,
            orderBy: 'startTime'
        }).then((response) => {
            for (let event of response.result.items) {
                events.push(this.objectFactory(event.summary, event.description, Date.parse(event.start.dateTime), Date.parse(event.end.dateTime)));
            }
        });

        return events;
    }

    /**
     * Gets a single event given its ID.
     * @param {String} id The ID of the event to get.
     * @returns {CalendarItem} The event with the given ID.
     */
    async getItem(id) {
        await gapi.client.calendar.events.get({
            calendarId: this.#calendarId,
            eventId: id
        }).then((response) => {
            return this.objectFactory(response.result.summary, response.result.description, Date.parse(response.result.start.dateTime), Date.parse(response.result.end.dateTime))
        });
    }

    /**
     * Adds an event to the user's calendar.
     * @param {String} name The name of the event.
     * @param {String} description The description of the event.
     * @param {Date} start The start date of the event.
     * @param {Date} end The end date of the event.
     * @returns {CalendarItem} The event that was added.
     */
    async addItem(name, description, start, end) {
        await gapi.client.calendar.events.insert({
            calendarId: this.#calendarId,
            resource: {
                summary: name,
                description: description,
                start: {
                    dateTime: start.toISOString()
                },
                end: {
                    dateTime: end.toISOString()
                }
            }
        }).then((response) => {
            return this.objectFactory(response.result.summary, response.result.description, Date.parse(response.result.start.dateTime), Date.parse(response.result.end.dateTime))
        })
    }

    deleteItem(id) {
        gapi.client.calendar.events.delete({
            calendarId: this.#calendarId,
            eventId: id
        });
    }

    /**
     * Updates the title of an event.
     * @param {String} id ID of the event to update.
     * @param {String} newTitle The new title of the event.
     */
    setTitle(id, newTitle) {
        gapi.client.calendar.events.patch({
            calendarId: this.#calendarId,
            eventId: id,
            resource: {
                summary: newTitle
            }
        });
    }

    /**
     * Updates the description of an event.
     * @param {String} id ID of the event to update.
     * @param {String} newDescription The new description of the event.
     */
    setDescription(id, newDescription) {
        gapi.client.calendar.events.patch({
            calendarId: this.#calendarId,
            eventId: id,
            resource: {
                description: newDescription
            }
        });
    }

    /**
     * Updates the start time of an event.
     * @param {String} id ID of the event to update.
     * @param {Date} newStartTime The new start time of the event.
     */
    setStartTime(id, newStartTime) {
        gapi.client.calendar.events.patch({
            calendarId: this.#calendarId,
            eventId: id,
            resource: {
                start: {
                    dateTime: newStartTime.toISOString()
                }
            }
        });
    }

    /**
     * Updates the end time of an event.
     * @param {String} id ID of the event to update.
     * @param {Date} newEndTime The new end time of the event.
     */
    setEndTime(id, newEndTime) {
        gapi.client.calendar.events.patch({
            calendarId: this.#calendarId,
            eventId: id,
            resource: {
                end: {
                    dateTime: newEndTime.toISOString()
                }
            }
        });
    }

    objectFactory(title, description, start, end) {
        try {
            if (JSON.parse(description).hasOwnProperty("taskId")) {
                return new WorkTimeBlock(this, title, description, start, end);
            } else {
                return new CalendarItem(this, title, description, start, end);
            }
        } catch (e) {
            return new CalendarItem(this, title, description, start, end);
        }
    }
}