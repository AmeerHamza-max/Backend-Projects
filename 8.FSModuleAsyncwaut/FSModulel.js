// fs_async_await_demo.js

const fs = require('fs/promises'); // Using the Promise-based FS API
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

async function performFileOperations() {
  try {
    // 1. Write to a file (Create or Overwrite)
    await fs.writeFile(filePath, 'Hello, this is the initial content.\n', 'utf-8');
    console.log('File created and written successfully.');

    // 2. Read the file
    const data = await fs.readFile(filePath, 'utf-8');
    console.log('File content:\n', data);

    // 3. Append to the file
    await fs.appendFile(filePath, 'This is some appended content.\n', 'utf-8');
    console.log('Content appended successfully.');

    // 4. Read again after append
    const updatedData = await fs.readFile(filePath, 'utf-8');
    console.log('Updated File content:\n', updatedData);

    // 5. Delete the file
    await fs.unlink(filePath);
    console.log('File deleted successfully.');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

performFileOperations();
