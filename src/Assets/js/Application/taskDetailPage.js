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
    document.getElementById("title").innerText = task.title;
    document.getElementById("description").innerText = task.description;

    let startString = (new Date(timeblock.start)).toISOString();
    document.getElementById("start-time").value = startString.substring(0, startString.indexOf("."));

    let endString = (new Date(timeblock.end)).toISOString();
    document.getElementById("end-time").value = endString.substring(0, endString.indexOf("."));

    // bug: timezone considerations
}

export function updateHandler() {
    updateBlockDate(document.getElementById("start-time").value, document.getElementById("end-time").value);
}

export function updateBlockDate(newStart, newEnd) {
    if (newEnd <= newStart) return alert("Start time has to come before end time");

    timeblock.setTimes(new Date(newStart), new Date(newEnd));
}

export function deleteBlock() {
    timeblock.delete();
    // return to planner page
}