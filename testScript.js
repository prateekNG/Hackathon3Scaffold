const deployment = 'https://script.google.com/macros/s/AKfycbwXRao6DvvaCs1YONV1PYyCsnsQi_2eI6gA40KqnGM4rlc_VZkasTIEtjOZh29GSb06hQ/exec';

async function sendRequest(email, question) {
    let url = deployment;
    if (email && question) {
        url += '?email=' + encodeURIComponent(email) + '&question=' + encodeURIComponent(question);
    }
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    alert(`message: ${data.message}\nstatus: ${data.status}`);
    return data;
}

async function submitData() {
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;
    await sendRequest(email, question);
}

async function fetchData() {
    const response = await sendRequest();
    const data = response.data;
    const dataTable = document.getElementById('dataTable');
    dataTable.innerHTML = ''; // Clear previous data

    if (data && data.length > 0) {
        const headers = Object.keys(data[0]);
        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.innerText = header;
            headerRow.appendChild(th);
        });
        dataTable.appendChild(headerRow);

        data.forEach(row => {
            const tr = document.createElement('tr');
            headers.forEach(header => {
                const td = document.createElement('td');
                td.innerText = row[header];
                tr.appendChild(td);
            });
            dataTable.appendChild(tr);
        });
    } else {
        const noDataRow = document.createElement('tr');
        const noDataCell = document.createElement('td');
        noDataCell.colSpan = 2;
        noDataCell.innerText = 'No data available';
        noDataRow.appendChild(noDataCell);
        dataTable.appendChild(noDataRow);
    }
}