import { Calendar } from "../Calendar/Calendar";
import { TaskItem } from "../List/TaskItem";
import { TaskList } from "../List/TaskList";

/**
 * @type {Array<TaskItem>}
 */
let upcomingTasks;
/**
 * @type {TaskList}
 */
let tasksClient;
/**
 * @type {Calendar}
 */
let calendarClient;

export async function initializeTaskAdder() {
    tasksClient = await TaskList.taskListFactory();
    upcomingTasks = await tasksClient.getItems();
    calendarClient = await Calendar.calendarFactory();
    display();
    return upcomingTasks;
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
 * @param {Date} startTime starting time of timeblock
 * @param {Date} endTime  ending time of timeblock
 */
export function assignTask(task, startTime, endTime) {
    calendarClient.addItem(task.title, JSON.stringify({ taskId: task.id }), startTime, endTime);
}