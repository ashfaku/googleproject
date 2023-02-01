/* global gapi */

import { TaskItem } from "./TaskItem";

/**
 * Client for interacting with Google Tasks API.
 */
export class TaskList {
    #listId;
    #nextPageToken;

    constructor(id) {
        this.#listId = id;
    }

    static async taskListFactory() {
        let id;

        await gapi.client.tasks.tasklists.list().then((response) => {
            id = response.result.items[0].id;
        });

        return new TaskList(id);
    }

    /**
     * Gets an array of tasks.
     * @returns {Array<TaskItem>} An array of tasks.
     */
    async getItems() {
        let tasks = [];

        await gapi.client.tasks.tasks.list({
            tasklist: this.#listId,
            showCompleted: false,
            showHidden: false,
            maxResults: 100
        }).then((response) => {
            for (let task of response.result.items) {
                tasks.push(new TaskItem(task.id, task.title, task.notes, Date.parse(task.due)));
            }
        });

        return tasks;
    }

    /**
     * Gets a single task given its ID.
     * @param {String} id The ID of the task to get.
     * @returns {TaskItem} The task with the given ID.
     */
    async getItem(id) {
        await gapi.client.tasks.tasks.get({
            tasklist: this.#listId,
            task: id
        }).then((response) => {
            return new TaskItem(response.result.id, response.result.title, response.result.notes, Date.parse(response.result.due));
        });
    }

    /**
     * Adds a task to the list.
     * @param {String} name The name of the task.
     * @param {String} description The description of the task.
     * @param {Date} due The due date of the task.
     * @returns {TaskItem} The task that was added.
     */
    async addItem(name, description, due) {
        await gapi.client.tasks.tasks.insert({
            tasklist: this.#listId,
            title: name,
            notes: description,
            due: due.toISOString()
        }).then((response) => {
            return new TaskItem(response.result.id, response.result.title, response.result.notes, Date.parse(response.result.due));
        });
    }

    /**
     * Deletes a task from the list.
     * @param {String} id The ID of the task to delete.
     */
    deleteItem(id) {
        gapi.client.tasks.tasks.delete({
            tasklist: this.#listId,
            task: id
        });
    }

    /**
     * Sets the title of a task.
     * @param {String} id The ID of the task to update.
     * @param {String} newTitle The new title of the task.
     */
    setTitle(id, newTitle) {
        gapi.client.tasks.tasks.patch({
            tasklist: this.#listId,
            task: id,
            title: newTitle
        });
    }

    /**
     * Sets the description of a task.
     * @param {String} id The ID of the task to update.
     * @param {String} newDescription The new description of the task.
     */
    setDescription(id, newDescription) {
        gapi.client.tasks.tasks.patch({
            tasklist: this.#listId,
            task: id,
            notes: newDescription
        });
    }

    /**
     * Sets the due date of a task.
     * @param {String} id The ID of the task to update.
     * @param {Date} newTime The new due date of the task.
     */
    setDueDate(id, newTime) {
        gapi.client.tasks.tasks.patch({
            tasklist: this.#listId,
            task: id,
            due: newTime.toISOString()
        });
    }

    /**
     * Sets the status of a task.
     * @param {String} id The ID of the task to update.
     * @param {Boolean} done Whether the task is done or not.
     */
    setStatus(id, done) {
        gapi.client.tasks.tasks.patch({
            tasklist: this.#listId,
            task: id,
            status: done ? "completed" : "needsAction"
        });
    }
}