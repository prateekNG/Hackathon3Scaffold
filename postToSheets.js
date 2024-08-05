const spinner = document.getElementById('spinner');

function showSpinner() {
    spinner.style.display = 'block';
}

function hideSpinner() {
    spinner.style.display = 'none';
}

const url = 'https://script.google.com/macros/s/AKfycbyZVRTkINi9HIiGkVRvVPEM7kY3A8lc1xS-Zw1GI_iZwoC1IA3f5RO0S3lPFAtQByaZFg/exec';

async function postDataToSheet(data) {
    showSpinner();
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            }
        });
        console.log("success:", response);
    } catch (err) {
        console.log("Error:" + err);
    } finally {
        hideSpinner();
    }
}

// Function to get data from the google sheet and display it in on the html page
async function getDataFromSheet() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const table = document.getElementById('dataTable');
    table.innerHTML = '';
    data.forEach(row => {
        console.log(row);
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row['email']}</td><td>${row['question']}</td>`;
        table.appendChild(tr);
    });
}

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;
    const data = { email, question };
    postDataToSheet(data);
}
);

document.getElementById('getData').addEventListener('click', function() {
    getDataFromSheet();
}
);