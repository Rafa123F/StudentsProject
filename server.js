console.log('we are running..');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'public'))); // Assuming your HTML file is in a folder named 'public'


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello!"); // Respond with a greeting
});

////
let submittedData = [];

 app.post('/submit', (req, res) => {
   // Handle the request here
   const data = req.body; // Assuming the form data is sent in the body
    submittedData.push(data); // Save the data to the array
   res.send('Data received');
 });

 app.get('/data', (req, res) => {
  res.json(submittedData); // Send the stored data as JSON
});

