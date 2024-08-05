const k = 3; // Number of times the email can be repeated

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Check if the email already exists in the sheet more than k times
    var email = data.email;
    var emailCount = 0;
    var values = sheet.getDataRange().getValues();
    values.forEach(function(row) {
      if (row[0] === email) {
        emailCount++;
      }
    });
    
    if (emailCount >= k) {
      return ContentService.createTextOutput('Error: Email already exists');
    }

    sheet.appendRow([data.email, data.question]);
    return ContentService.createTextOutput('Success');
  }
  catch (e) {
    return ContentService.createTextOutput('Error: ' + e);
  }
}

function doGet() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const values = sheet.getDataRange().getValues();
    const data = values.map(row => {
        return {
            email: row[0],
            question: row[1]
        };
    });
    return ContentService.createTextOutput(JSON.stringify(data));
}