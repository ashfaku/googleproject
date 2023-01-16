# planner.js
- driver of the main page, the planner

# data
- `todayEvents: CalendarItem[]`: array of events to plot in today's view
- `date`, via qs

# actions
- `initialize(): void`
	- get the date in question from querystring (if not provided, use today's date)
	- grab the events of that date from the GCalendar client and populate `todayEvents`
	- `display()`
- `display(): void`
	- show the date on the top
	- set the <-- and --> to advance to the right date on click
	- plots the items of `todayEvents` to the scrolling time graph
		- if item is a `WorkTimeBlock`, clicking it should open the Task Detail Page for that block's original task ID
		- else, clicking it should open the Event Detail Page for that event's ID