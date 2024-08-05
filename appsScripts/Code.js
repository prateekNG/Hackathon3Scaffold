const k = 3;

function doGet(e) {
  var response;
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get parameters from URL
    var email = e.parameter.email; 
    var question = e.parameter.question;

    if (!email || !question) {
      const values = sheet.getDataRange().getValues();
      const data = values.map(row => {
          return {
              email: row[0],
              question: row[1]
          };
      });

      response = {
        status: 'success',
        message: data.length ? 'Data found!' : 'No records!',
        data: data.slice(1)
      }
    } else {
      var values = sheet.getDataRange().getValues();
      var emailCount = 0;
      values.forEach(function(row) {
        if (row[0] === email) {
          emailCount++;
        }
      });
      
      if (emailCount >= k) {
        response = {
          status: 'error',
          message: `Email ID has already requested made ${k} requests`
        };  
      } else {
        // Append data to the sheet
        sheet.appendRow([email, question]);
        response = {
          status: 'success',
          message: 'Data appended successfully.'
        };
      }
    }
  } catch (error) {
    response = {
      status: 'error',
      message: 'An error occurred: ' + error.message
    };
  }

  // Return the response as JSON
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON)
}
