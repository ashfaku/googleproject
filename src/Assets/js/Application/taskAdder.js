import { Calendar } from "../Calendar/Calendar";
import { TaskItem } from "../List/TaskItem";
import { TaskList } from "../List/TaskList";

/**
 * @type {Array<TaskItem>}
 */
let upcomingTasks;

export function initializeTaskAdder() {
    upcomingTasks = (new TaskList()).getItems();
    display();
}

export function display() {
    for (let task of upcomingTasks) {
        // display an entry for task
        // set up the handler for assigning the task to a day
    }
}

/**
 * 
 * @param {TaskItem} task The task to assign to a day.
 */
export function assignTask(task) {
    let startTime;
    let endTime;

    do {
        // get a start and end time from the user
        // same date
    } while (endTime < startTime);

    (new Calendar()).addItem(task.title, JSON.stringify({ taskId: task.id }), startTime, endTime);
}