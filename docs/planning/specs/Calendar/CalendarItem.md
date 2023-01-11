# CalendarItem class
- Represents an item from the calendar

# Fields
- `parentCalendar: Calendar`: The `Calendar` that contains this `CalendarItem`
- `id: String`: This event's ID
- `title: String`: This event's title
- `description: String`: this event's description
- `start: Date`: start time
- `end: Date`: end time

# Methods
- Constructor
	- 
- `delete(): void`
	- tells the Calendar client to delete this event
- `getTitle(): String`
	- get this event's title
- `setTitle(newTitle: String): void`
	- set a new title for this event
- `getDescription(): String`
	- get this event's description
- `setDescription(newDecription: String): void`
	- set a new description for this event
- `getStartTime(): Date`
	- get this event's start time
- `setStartTime(newTime: Date): void`
	- set this event's start time
- `getEndTime(): Date`
	- get this event's end time
- `setEndTime(newTime: Date): void`
	- set this event's end time