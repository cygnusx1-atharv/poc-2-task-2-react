const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

// Function to send the file content to the server
const sendFileToServer = async () => {
    try {
        const fileContent = fs.readFileSync('src/components/Icon/icon.css', 'utf8');
        const woffContent = fs.readFileSync('src/assets/fonts/icons/atharv-font.woff2', 'binary');
        const formData = new FormData()
        formData.append('files', Buffer.from(fileContent), 'icon.css');
        formData.append('files', Buffer.from(woffContent), 'atharv-font.woff2');
        // formData.append('woff', )
        //console.log(file)
        const response = await axios.post('http://localhost:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            } 
        });
        console.log('File uploaded successfully:', response.data);
    } catch (error) {
        console.error('Error uploading file (Client): ', error);
    }
}

// Call the function to send the file to the server
sendFileToServer();