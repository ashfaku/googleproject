import { TaskList } from "../List/TaskList";
import { CalendarItem } from "./CalendarItem";

export class WorkTimeBlock extends CalendarItem {
    #originalTask;

    constructor(parentCalendar, id, title, description, start, end) {
        super(parentCalendar, id, title, description, start, end);
        this.resolveOriginalTask(description);
    }

    async resolveOriginalTask(description) {
        let taskId = JSON.parse(description).taskId;
        let tasksClient = await TaskList.taskListFactory();
        this.#originalTask = await tasksClient.getItem(taskId);
    }

    get originalTask() {
        return this.#originalTask;
    }

    setOriginalTask(newTask) {
        this.#originalTask = newTask;
        this.setDescription(JSON.stringify({ taskId: newTask.id }));
    }
}