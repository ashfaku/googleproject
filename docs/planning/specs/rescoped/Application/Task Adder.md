# taskAdder.js
- driver of the screen where the user adds tasks to their day

# data
- `upcomingTasks: TaskItem[]`

# actions
- `initialize(): void`
	- grab an array of tasks from the GTasks client
	- `display()`
- `display(): void`
	- display an element for each task in the right section based on due date
	- sections w/o tasks are hidden
- `assignTask(id: string): void`
	- assign a task to a time block
	- collect a date and start and end time from user
	- verify that end > start
	- add the time block w/ the task ID association onto GCalendar