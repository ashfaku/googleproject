import { CalendarItem } from "../Calendar/CalendarItem";

/**
 * @type {CalendarItem}
 */
let event;

/**
 * @param {CalendarItem} event The CalendarItem to display details for.
 */
export function initializeEventDetailPage(event) {
    this.event = event;
    display();
}

export function display() {
    // display event.title
    // display event.description
    // display event.start
    // display event.end
}