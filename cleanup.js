const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'resources', 'dist');

// Function to delete all files in the directory
const cleanDirectory = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            cleanDirectory(filePath); // Recursively clean subdirectories
        } else {
            fs.unlinkSync(filePath); // Delete file
        }
    });
};

cleanDirectory(directory);
console.log('Old files deleted');
