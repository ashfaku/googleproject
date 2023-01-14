# class TaskItem
- Represents an item from the task list

# Fields
- `parentList: TaskList`: The `TaskList` that contains this `TaskItem`
- `id: String`: This task's ID
- `title: String`: This task's title
- `description: String`: this task's description
- `due: Date`: due time
- `done: bool`: completion status

# Methods
- Constructor
	- set the id, title, due, status, description, based on what's passed in
- `delete(): void`
	- tells the TaskList client to delete this task
- `getTitle(): String`
	- get this task's title
- `setTitle(newTitle: String): void`
	- set a new title for this task
- `getDescription(): String`
	- get this task's description
- `setDescription(newDecription: String): void`
	- set a new description for this task
- `getDue(): Date`
	- get this task'due date
- `setDue(newTime: Date): void`
	- set this task's due date
- `getStatus(): bool`
	- true if this task is completed
- `setStatus(newStatus: bool): void`
	- set this task's status