let tokenClient;

function initializeGoogle(clientId, discoveryDocs, scopes) {
    // initialize Google API Client
    gapi.load("client", async () => {
        await gapi.client.init({
            discoveryDocs: discoveryDocs
        });
    });

    // initialize Google Identity Services client
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: scopes,
        callback: ""
    });
}

function signIn(callback) {
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }

        callback();
    }

    if (gapi.client.getToken() === null) { // user never consented before
        tokenClient.requestAccessToken({ prompt: "consent" });
    } else { // user consented before
        tokenClient.requestAccessToken({ prompt: "" });
    }
}

function signOut(callback) {
    const token = gapi.client.getToken();

    if (token !== null) {
        google.accounts.oauth2.revoke(token.access_token);
        gapi.client.setToken("");

        callback();
    }
}
