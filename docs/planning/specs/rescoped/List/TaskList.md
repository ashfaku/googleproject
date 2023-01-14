# class TaskList
- A client for interacting with the Google Tasks API

# Fields
- `listId: String`: the ID of our list (`Planner`) on Google Tasks
- `nextPageToken: String`: next page token

# Methods
- Constructor
	- store the user's primary/default list's ID to `listId`
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
- `setDueDate(id: String, newTime: Date): void`
	- set the task's due date
- `setStatus(id: String, done: bool): void`
	- set the task's status