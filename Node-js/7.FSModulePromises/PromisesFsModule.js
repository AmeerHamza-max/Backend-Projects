const fs = require('fs');
const path = require('path');

const dirPath = __dirname; 
const fileName='promisesFile';


fs.promises.readdir(dirPath)
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.error(err);
  });
const filePath=path.join(__dirname,fileName);


fs.promises.writeFile(filePath,'this is the initial data','utf-8').then(()=>{
    console.log('file created successfully');
}).catch((error)=>{
    console.log(error);
})
fs.promises.readFile(filePath,'utf-8').then((daa)=>{
    console.log(daa);
}).catch((error)=>{
    console.log(error);
});
fs.promises.appendFile(filePath,'\nThis is Ameer Hamza','utf-8').then((daa)=>{
    console.log(daa);
}).catch((error)=>{
    console.log(error);
});
fs.promises.unlink(filePath)

