# class Event extends CalendarItem
- Represents and event

# Fields
- `prerequisites: PrerequisiteTask[]`: list of tasks that need to be completed prior to the attendance of this event
	- IDs of prereq tasks can be stored in a stringified json in the description on the Google Calendar side
	
# Methods
- `getPrerequisites(): PrerequisiteTask[]`
	- get this event's prerequisite tasks
- `addPrerequisite(prereq: PrerequisiteTask): void`
	- adds a prerequisite task for this event
- `deletePrerequisite(id: String): void`
	- deletes a prerequisite task from this event