console.log('Hello there ..');
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    // Send the data to the server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(message => {
        console.log(message); // Log the response message
        this.reset(); // Reset the form
    })
    .catch(error => console.error('Error submitting data:', error));
});
// Function to fetch and display data in a table
document.getElementById('showTableBtn').addEventListener('click', function() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#dataTable tbody');
            tableBody.innerHTML = ''; // Clear existing data

            data.forEach(item => {
                const row = document.createElement('tr');
                
                const cell = document.createElement('td');
                cell.textContent = item.data; // Assuming the submitted data has a 'data' property
                row.appendChild(cell);

                const subjectCell = document.createElement('td');
                subjectCell.textContent = item.data2; // Assuming the submitted data has a 'data2' property
                row.appendChild(subjectCell);
                
                const gradeCell = document.createElement('td');
                gradeCell.textContent = item.data3; // Assuming the submitted data has a 'data3' property
                row.appendChild(gradeCell);
                

                tableBody.appendChild(row);
            });

            // Show the table
            const table = document.getElementById('dataTable');
            table.style.display = 'table';
        })
        .catch(error => console.error('Error fetching data:', error));
});
