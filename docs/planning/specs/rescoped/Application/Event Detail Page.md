# eventDetailPage.js
- driver of the page where the user can find info about a given event

# keep track of...
- `event: CalendarItem`: the item in focus
- `id` via qs

# actions
- `initialize(): void`
	- obtain the event's id (via querystring?)
	- get the `CalendarItem` object from the GCalendar client
	- if `event` is also a `WorkTimeBlock`, display the section for configuring duration and deletion of the block
	- `display()`
- `display(): void`
	- set the `innerText` of the display elements based on the corresponding object properties
- `updateBlockStart(): void`
	- collect a new starting time from the user
	- make sure it's before the ending time
	- update `event`
	- `display()`
- `updateBlockEnd(): void`
	- collect a new ending time from the user
	- make sure it's after the starting time
	- update `event`
	- `display()`
- `deleteBlock(): void`
	- `event.delete()`
	- return to the main planner page