# taskDetailPage.js
- driver of the page where the user can find info about a given task

# keep track of...
- `task: TaskItem`: the item in focus
- `id` via qs

# actions
- `initialize(): void`
	- obtain the task's id (via querystring?)
	- get the `TaskItem` object from the GTasks client
	- `display()`
- `display(): void`
	- set the `innerText` of the display elements based on the corresponding object properties