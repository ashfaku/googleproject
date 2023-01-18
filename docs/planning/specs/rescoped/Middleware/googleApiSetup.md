# googleApiSetup.js
- Setup for for Google API client
- https://github.com/google/google-api-javascript-client
- https://developers.google.com/calendar/api/quickstart/js

# Data
- `tokenClient`: user identity token client object from Google

# Functions
- `initialize(clientId: String, apiKey: String, discoveryDocs: String, scope: String): void`
	- if `gapi` and `google` aren't defined yet
		- load the libraries
		- configure `gapi`, `google`, `tokenClient`
- `login(callback: function): void`
	- authenticate user's Google account
	- run `callback` when authenticated
- `logout(): void`
	- invalidate the token
	- refresh