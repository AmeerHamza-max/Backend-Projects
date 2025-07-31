const fs = require('fs');
const path = require('path');

// Define the file name
const fileName = 'text.txt';
const filepath = path.join(__dirname, fileName);

// Write to the file (overwrite if it exists)
fs.writeFileSync(filepath, 'This is the initial data updated', 'utf-8');
console.log('File written successfully at:', filepath);

// Read file content (after write)
let readFile = fs.readFileSync(filepath, 'utf-8');
console.log('Initial file content:');
console.log(readFile);

// Append new data to the file
fs.appendFileSync(filepath, '\nThis is the appended data', 'utf-8');

// Read file content again (after append)
let updatedContent = fs.readFileSync(filepath, 'utf-8');
console.log('Updated file content:');
console.log(updatedContent);



/// To delete the file 

// const fileDelete=fs.unlinkSync(filepath);
// console.log(fileDelete);


//To rename the file 

let newUpdated='updateTest.text';
const newFilepath=path.join(__dirname,newUpdated);

const renameFile=fs.renameSync(
    filepath,newFilepath
);
console.log(fs.renameFile);

