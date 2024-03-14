const axios = require('axios');
const fs = require('fs');

// Function to send the file content to the server
const sendFileToServer = async () => {
    try {
        const fileContent = fs.readFileSync('src/components/Icon/icon.css', 'utf8');
        const formData = new FormData()
        formData.append('file', fileContent)
        //console.log(file)
        const response = await axios.post('http://localhost:5000/upload', formData);
        console.log('File uploaded successfully:', response.data);
    } catch (error) {
        console.error('Error uploading file (Client): ', error);
    }
}

// Call the function to send the file to the server
sendFileToServer();