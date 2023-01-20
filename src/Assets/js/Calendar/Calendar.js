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
    constructor() {
        gapi.client.calendar.calendarList.list().then((response) => {
            for (let calendar of response.result.items) {
                if (calendar.primary) {
                    this.#calendarId = calendar.id;
                    break;
                }
            }
        });
    }

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
                events.push(event.id);
            }
        });

        return events;
    }
}