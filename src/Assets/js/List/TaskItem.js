export class TaskItem {
    #parentList;
    #id;
    #title;
    #description;
    #due;
    #done;

    constructor(parentList, id, title, description, due, done) {
        this.#parentList = parentList;
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#due = due;
        this.#done = done;
    }

    /**
     * Deletes the task.
     */
    delete() {
        this.#parentList.deleteItem(this.#id);
    }

    get title() {
        return this.#title;
    }

    get description() {
        return this.#description;
    }

    get due() {
        return this.#due;
    }

    get done() {
        return this.#done;
    }

    get id() {
        return this.#id;
    }

    setTitle(newTitle) {
        this.#parentList.setTitle(this.#id, newTitle);
        this.#title = newTitle;
    }

    setDescription(newDescription) {
        this.#parentList.setDescription(this.#id, newDescription);
        this.#description = newDescription;
    }

    setDueDate(newDue) {
        this.#parentList.setDueDate(this.#id, newDue);
        this.#due = newDue;
    }

    setStatus(done) {
        this.#parentList.setStatus(this.#id, done);
        this.#done = done;
    }
}