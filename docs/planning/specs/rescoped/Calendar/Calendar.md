# class Calendar
- This class is a client for interacting with the Google Calendar API

# Fields
- `calendarId: String`: the ID of our calendar (`Planner`) on Google Calendar
- `nextPageToken: String`: next page token

# Methods
- Constructor
	- store the user's primary/default calendar's ID to `calendarId`
- `getItems(year: Number, month: Number, day: Number): CalendarItem[]`
	- Get an array of `CalendarItem`s that occur on the given date
- `getItem(id: String): CalendarItem`
	- Get an event of the given id
- `addItem(name: String, description: String, start: Date, end: Data): CalendarItem
	- Add a new event to the calendar, and return its corresponding `CalendarItem`
- `deleteItem(id: String): void`
	- Delete the event of the given id, and it's prerequisite tasks
- `setTitle(id: String, newTitle: String): void`
	- set a new title for the given event ID
- `setDescription(id: String, newDecription: String): void`
	- set a new description for this event ID
- `setStartTime(id: String, newTime: Date): void`
	- set the event's start time
- `setEndTime(id: String, newTime: Date): void`
	- set this event's end time
- `objectFactory(title: String, description: String, start: Date, end: Date): typeof CalendarItem`
		- identify if the event is a work time block.  we could have some type of indicator in the description over at Google Calendar's side
		- use the corresponding constructor to construct the appropriate `CalendarItem` type