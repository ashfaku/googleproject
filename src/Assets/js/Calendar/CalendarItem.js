import { Calendar } from './Calendar'

/**
 * Represents an item in the user's calendar.
 */
export class CalendarItem {
    #parentCalendar;
    #id;
    #title;
    #description;
    #start;
    #end;

    /**
     * @param {Calendar} parentCalendar The calendar that this item belongs to.
     * @param {String} id The ID of the item.
     * @param {String} title The title of the item.
     * @param {String} description The description of the item.
     * @param {Date} start The start date of the item.
     * @param {Date} end The end date of the item.
     */
    constructor(parentCalendar, id, title, description, start, end) {
        this.#parentCalendar = parentCalendar;
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#start = start;
        this.#end = end;
    }

    setTitle(newTitle) {
        this.#title = newTitle;
        this.#parentCalendar.setTitle(this.#id, newTitle);
    }

    setDescription(newDescription) {
        this.#description = newDescription;
        this.#parentCalendar.setDescription(this.#id, newDescription);
    }

    setStartTime(newStartTime) {
        this.start = newStartTime;
        this.#parentCalendar.setStartTime(this.#id, newStartTime);
    }

    setEndTime(newEndTime) {
        this.#end = newEndTime;
        this.#parentCalendar.setEndTime(this.#id, newEndTime);
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get description() {
        return this.#description;
    }

    get start() {
        return this.#start;
    }

    get end() {
        return this.#end;
    }

    delete() {
        this.#parentCalendar.delete(this.#id);
    }
}