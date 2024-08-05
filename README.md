
# Google Sheets Data Submission Form

This is a simple HTML form that allows users to submit data to a Google Sheet. The form takes in an email and a question as input. The data is then sent to a Google Apps Script web app, which appends the data to the specified Google Sheet.

## Features

- Submit data to a Google Sheet via a web form
- Simple and easy to use
- Customizable form fields and spreadsheet destination
- Rate limiting to prevent abuse

## Prerequisites

- A Google Account
- A Google Sheet to store the data
- A Google Apps Script project

## Setup

1. **Create a Google Sheet** and add two columns: "Email" and "Question".
2. **Open the Apps Script editor** by going to "Tools" > "Script editor" in your Google Sheet.
3. **Copy and paste the code** from `appsScripts/Code.js` into the Apps Script editor.
4. **Replace the placeholder value** for `k` with your desired rate limit.
5. **Deploy the Apps Script** as a web app by going to "Deploy" > "New deployment". Choose "Web app" as the type, set "Execute the app as:" to "Me", and "Who has access to the app:" to "Anyone, even anonymous". Click "Deploy".
6. **Copy the web app URL** from the deployment settings.
7. **Update the `deployment` variable** in `postToSheets.js` with the web app URL.
8. **Update the spreadsheet URL** in this README file with the URL of your Google Sheet. Make sure to set the sharing settings of the sheet so that anyone with the link can view.

**Spreadsheet URL:** https://docs.google.com/spreadsheets/d/1xw6gvBfYtaY9kC_VVfOvQlDvIhk66Ts25HaD0T_Vg5U/edit

## Usage

1. **Open `index.html`** in a web browser.
2. **Enter your email and question** in the form fields.
3. **Click the "Submit" button** to submit the data to the Google Sheet.
4. **Click the "Fetch Data" button** to display the data currently in the Google Sheet.

## Rate Limiting

The Apps Script includes rate limiting to prevent abuse. The `k` variable in the code determines the maximum number of requests allowed from a single email address. If an email address exceeds the limit, they will receive an error message.

## Customization

- You can add or remove form fields as needed.
- You can customize the appearance of the form using CSS.
- You can modify the Apps Script code to customize the data processing logic.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on GitHub.