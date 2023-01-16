# taskDetailPage.js
- driver of the page where the user can find info about a given task

# keep track of...
- `task: TaskItem`: the item in focus
- `timeblock: WorkTimeBlock`: the work time block related to `task`
- `id`  via qsI

# actions
- `initialize(): void`
	- obtain the event's id (via querystring?)
	- resolve the `CalendarItem`, then the associated `TaskItem`
	- `display()`
- `display(): void`
	- set the `innerText` of the display elements based on the corresponding object properties
- `updateBlockDate(): void`
	- collect a new date from the user
	- update `timeblock`
	- `display()`
- `updateBlockStart(): void`
	- collect a new starting time from the user
	- make sure it's before the ending time
	- update `timeblock`
	- `display()`
- `updateBlockEnd(): void`
	- collect a new ending time from the user
	- make sure it's after the starting time
	- update `timeblock`
	- `display()`
- `deleteBlock(): void`
	- `timeblock.delete()`
	- navigate back