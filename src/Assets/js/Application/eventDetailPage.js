import { CalendarItem } from "../Calendar/CalendarItem";

/**
 * @type {CalendarItem}
 */
let calEvent;

/**
 * @param {CalendarItem} event The CalendarItem to display details for.
 */
export function initializeEventDetailPage(event) {
    calEvent = event;
    display();
}

export function display() {
    document.getElementById("title").innerText = calEvent.title;
    document.getElementById("description").innerText = calEvent.description;
    document.getElementById("start-time").innerText = new Date(calEvent.start);
    document.getElementById("end-time").innerText = new Date(calEvent.end);
}