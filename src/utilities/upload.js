const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Read the file to upload
const filePath = path.join(__dirname, '../components/Icon/icon.css');
const fileContent = fs.readFileSync(filePath);

// Make a POST request to upload the file
axios.post('http://localhost:5000/upload', fileContent, {
    headers: {
        'Content-Type': 'text/css', // Specify the content type of the file
    },
})
    .then(response => {
        console.log('File uploaded successfully:', response.data);
    })
    .catch(error => {
        console.error('Error uploading file:', error.message);
    });