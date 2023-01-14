# class WorkTimeBlock extends CalendarItem
- Represents a time block the user planned for working on a given task

# Fields
- `originalTask: Task`:  the task the user will be working on during this time block
	- ID of the original task can be stored in a stringified json in the description on the Google Calendar side

# Methods
- constructor
	- after superimplementation, parse and set the original task info from the API response of description
- `getOriginalTask(): Task
	- get the task that this work time block is for
- `setOriginalTask(newTask: Task)`
	- set the task that this work time block is for