# eventDetailPage.js
- driver of the page where the user can find info about a given event

# keep track of...
- `event: CalendarItem`: the item in focus
- `id` via qs

# actions
- `initialize(): void`
	- obtain the event's id (via querystring?)
	- get the `CalendarItem` object from the GCalendar client
	- `display()`
- `display(): void`
	- set the `innerText` of the display elements based on the corresponding object properties