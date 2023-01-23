import { TaskList } from "../List/TaskList";
import { CalendarItem } from "./CalendarItem";

export class WorkTimeBlock extends CalendarItem {
    #originalTask;

    constructor(parentCalendar, id, title, description, start, end) {
        super(parentCalendar, id, title, description, start, end);

        let taskId = JSON.parse(description).taskId;
        this.#originalTask = (new TaskList()).getItem(taskId);
    }

    get originalTask() {
        return this.#originalTask;
    }

    setOriginalTask(newTask) {
        this.#originalTask = newTask;
        this.setDescription(JSON.stringify({ taskId: newTask.id }));
    }
}