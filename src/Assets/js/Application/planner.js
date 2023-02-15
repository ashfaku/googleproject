import { Calendar } from "../Calendar/Calendar";
import { CalendarItem } from "../Calendar/CalendarItem";

let calendarClient;
/**
 * @type {Array<CalendarItem>}
 */
let todayEvents;

export async function initializePlanner(year, month, day) {
    calendarClient = await Calendar.calendarFactory()
    todayEvents = await calendarClient.getItems(year, month, day);
    display();
    return todayEvents;
}

export function display() {
    // display today's date
    // set where <-- and --> buttons go

    for (let event of todayEvents) {
        // plot the event on the scrolling time graph
        // based on event.start and event.end
        // if typeof event === WorkTimeBlock, on click pass event to the worktimeblock details page
        // else on click pass event to the event details page
    }
}