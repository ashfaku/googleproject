# class TaskList
- A client for interacting with the Google Tasks API

# Fields
- `listId: String`: the ID of our list (`Planner`) on Google Tasks
- `nextPageToken: String`: next page token

# Methods
- Constructor
	- Get a list of lists from the user's account
	- Find our list, which is named `Planner`, and save its ID to `listId`
		- If it doesn't exist, create it
- `getItems(): TaskItem[]`
	- Get an array of `TaskItem`
- `getItem(id: String): TaskItem`
	- Get a task of the given id
- `addItem(name: String, description: String, due: Date): TaskItem`
	- Add a new task to the list, and return its corresponding `TaskItem`
- `deleteItem(id: String): void`
	- Delete the task of the given id, and it's subtasks
- `setTitle(id: String, newTitle: String): void`
	- set a new title for the given task ID
- `setDescription(id: String, newDecription: String): void`
	- set a new description for this task ID
	- our descriptions are stringified jsons with the actual description, plus any additional application-specific metadata, such as IDs of tasks being referenced
- `setDueDate(id: String, newTime: Date): void`
	- set the task's due date
- `setStatus(id: String, done: bool): void`
	- set the task's status
- `objectFactory(title: String, description: String, due: Date): typeof TaskItem`
		- our metadata on the Google Tasks description side can have a value for whether this is an `TASK`, `SUB_TASK`, `TASK_PLANNED_FOR_DAY`
		- use the corresponding constructor to construct the appropriate `TaskItem` type