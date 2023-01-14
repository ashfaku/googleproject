# class Calendar
- This class is a client for interacting with the Google Calendar API

# Fields
- `calendarId: String`: the ID of our calendar (`Planner`) on Google Calendar
- `nextPageToken: String`: next page token

# Methods
- Constructor
	- Get a list of calendars from the user's account
	- Find our calendar, which is named `Planner`, and save its ID to `calendarId`
		- If it doesn't exist, create it
- `getItems(year: Number, month: Number): CalendarItem[]`
	- Get an array of `CalendarItem`s that occur in the given month
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
	- our descriptions are stringified jsons with the actual description, plus any additional application-specific metadata, such as IDs of tasks being referenced
- `setStartTime(id: String, newTime: Date): void`
	- set the event's start time
- `setEndTime(id: String, newTime: Date): void`
	- set this event's end time
- `objectFactory(title: String, description: String, start: Date, end: Date): typeof CalendarItem`
		- our metadata on the Google Calendar description side can have a value for whether this is an `EVENT` or a `WORK_TIME_BLOCK`
		- use the corresponding constructor to construct the appropriate `CalendarItem` type