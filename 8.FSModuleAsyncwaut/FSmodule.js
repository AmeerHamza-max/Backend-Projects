const path=require('path');
const fs=require('fs');
const fileName='Practice.txt';
const filePath=path.join(__dirname,fileName);
const writeFile=async ()=>{
    await fs.promises.writeFile(filePath,'This is the Promises file written by me','utf-8');

}
writeFile();
const readFile=async()=>{
    const data=await fs.promises.readFile(filePath,'utf-8');
    console.log(data);
}
readFile();
const updateFile=async ()=>{
     await fs.promises.appendFile(filePath,'\nThis is updated content written by Hazmz','utf-8');

}
updateFile();
const deleteFile=async ()=>{
    await fs.promises.unlink(filePath);
    console.log('File has successfully deleted by me ');
}
deleteFile();

