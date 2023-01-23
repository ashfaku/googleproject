import { Calendar } from "../Calendar/Calendar";

const calendarClient = new Calendar();
let todayEvents;

export function initializePlanner(year, month, day) {
    todayEvents = calendarClient.getItems(year, month, day);
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