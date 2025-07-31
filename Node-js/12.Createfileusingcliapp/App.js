const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter file name: ', (fileName) => {
  rl.question('Enter content for the file: ', (content) => {
    const filePath = path.join(__dirname, fileName);
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File created successfully at:', filePath);
      }
      rl.close();
    });
  });
});
