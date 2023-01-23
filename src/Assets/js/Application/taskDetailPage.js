import { WorkTimeBlock } from "../Calendar/WorkTimeBlock";
import { TaskItem } from "../List/TaskItem";

/**
 * @type {TaskItem}
 */
let task;
/**
 * @type {WorkTimeBlock}
 */
let timeblock;

/**
 * @param {WorkTimeBlock} block The WorkTimeBlock to display details for.
 */
export function initializeTaskDetailPage(block) {
    timeblock = block;
    task = timeblock.originalTask;
    display();
}

export function display() {
    // display task.title
    // display task.description
    // display task.due
    // display timeblock.start
    // display timeblock.end
}

export function updateBlockDate() {
    // get a date from the user
    /**
     * @type {Date}
     */
    let newDate;

    let newStart = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), timeblock.start.getHours(), timeblock.start.getMinutes());
    let newEnd = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), timeblock.end.getHours(), timeblock.end.getMinutes());

    timeblock.setStartTime(newStart);
    timeblock.setEndTime(newEnd);

    display();
}

export function updateBlockStart() {
    /**
     * @type {Date}
     */
    let newTime;

    do {
        // get a time from the user
    }
    while (newTime > timeblock.end);

    let newStart = new Date(timeblock.start.getFullYear(), timeblock.start.getMonth(), timeblock.start.getDate(), newTime.getHours(), newTime.getMinutes());

    timeblock.setStartTime(newStart);

    display();
}

export function updateBlockEnd() {
    /**
     * @type {Date}
     */
    let newTime;

    do {
        // get a time from the user
    }
    while (newTime < timeblock.start);

    let newEnd = new Date(timeblock.end.getFullYear(), timeblock.end.getMonth(), timeblock.end.getDate(), newTime.getHours(), newTime.getMinutes());

    timeblock.setEndTime(newEnd);

    display();
}

export function deleteBlock() {
    timeblock.delete();
    // return to planner page
}