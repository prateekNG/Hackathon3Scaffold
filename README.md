
# Google Sheets Data Submission Form

This is a simple web application that allows users to submit data to a Google Sheet. It includes a form for users to input their email and a question, and uses Google Apps Script to handle the data submission and retrieval.

## Features

-   Submit data to a Google Sheet via a web form
-   Retrieve and display data from the Google Sheet
-   Input validation to limit email submissions
-   Loading spinner to indicate data processing

## Project Structure

```
├── appsScripts
│   └── Code.js
├── postToSheets.js
└── index.html

```

-   **index.html:** Contains the HTML structure of the web form and a table to display data.
-   **postToSheets.js:** Contains JavaScript code to handle form submission, data posting, data retrieval, and UI updates.
-   **appsScripts/Code.js:** Contains Google Apps Script code deployed to Google Sheets to process data, append new submissions to the sheet, and fetch data for display.

## Setup Instructions

1.  **Create a Google Sheet:**
    -   Create a new Google Sheet.
    -   Rename the first sheet to "Sheet1" (or modify the code accordingly).

2.  **Set up Apps Script:**
    -   In your Google Sheet, go to "Extensions" -> "Apps Script."
    -   Paste the code from **appsScripts/Code.js** into the Apps Script editor.
    -   **Replace** `const k = 3;` with your desired limit for repeated email submissions.
    -   Deploy the Apps Script as a web app:
        -   Click on "Deploy" -> "New Deployment."
        -   Choose "Web app" as the type.
        -   Set "Execute the app as:" to your Google account.
        -   Set "Who has access to the app:" to "Anyone, even anonymous" (adjust if needed).
        -   Click "Deploy" and copy the generated web app URL.

3.  **Update HTML and JavaScript:**
    -   Open **index.html** and **postToSheets.js** in a text editor.
    -   **Replace** `"https://script.google.com/macros/s/AKfycbyZVRTkINi9HIiGkVRvVPEM7kY3A8lc1xS-Zw1GI_iZwoC1IA3f5RO0S3lPFAtQByaZFg/exec"` in **postToSheets.js** with your actual Apps Script web app URL.
    -   Replace `"https://docs.google.com/spreadsheets/d/1YDMgctWNtBHSG8nF6kcZNv3bQKjy4fg-0bFkiF6gIPI/edit"` in **index.html** (if included) with your Google Sheet URL.

4.  **Test the Application:**
    -   Save all changes and open **index.html** in your web browser.
    -   Fill in the form and submit data.
    -   You should see the data appear in your Google Sheet.
    -   Click the "Get Data" button to retrieve and display the data in the table.

## How It Works

-   **index.html:** Provides the user interface with a form to input data and a table to display retrieved data.
-   **postToSheets.js:**
    -   Handles form submissions.
    -   Sends the form data to the Apps Script using the `fetch` API.
    -   Retrieves data from the Apps Script using the `fetch` API.
    -   Updates the HTML table with the retrieved data.
-   **appsScripts/Code.js:**
    -   **doPost(e):** This function is triggered when the web app receives a POST request (form submission).
        -   It parses the submitted data from the request.
        -   It checks if the email already exists in the sheet more than "k" times (configurable).
        -   If the email count is within the limit, it appends the data as a new row in the Google Sheet.
        -   Returns a success or error message.
    -   **doGet():** This function is triggered when the web app receives a GET request.
        -   It fetches all data from the Google Sheet.
        -   Formats the data into a JSON object.
        -   Returns the JSON data.

## Notes

-   Ensure you have enabled the Google Sheets API in your Google Cloud Platform project if you encounter any API-related errors.
-   Adjust the `k` value in **appsScripts/Code.js** to control the limit of repeated email submissions.
-   Consider adding more robust input validation and error handling to your application.
-   This setup currently allows anonymous access to the web app and data submission. Adjust the Apps Script deployment settings if you require authentication.

This README provides a detailed overview of the project, setup instructions, explanation of the code, and additional notes to help you understand and use this Google Sheets data submission form application. Please let me know if you have any other questions.