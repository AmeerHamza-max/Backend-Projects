const fs=require('fs');
const path=require('path');
const fileName='require.txt';
const filePath=path.join(__dirname,fileName);
console.log(filePath);
const writeFile=fs.writeFileSync(filePath,'This is written by Ameer Hamza','utf-8');
const readFile=fs.readFileSync(filePath,'utf-8');
console.log(readFile);
const updateFile=fs.appendFileSync(filePath,'\nThis is again written by Hamza Champ','utf-8');
const deleteFile=fs.unlinkSync(filePath,'File has been deleted');


const asyncFile='async.txt';
fs.writeFile(asyncFile,'This is async file','utf-8',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File has been successfully updated');
    }
});
fs.readFile(asyncFile,'utf-8',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File has been successfully Read');
    }
});
fs.appendFile(asyncFile,'This is async file with appended mode','utf-8',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File has been successfully updated');
    }
});
fs.unlink(asyncFile,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('The file has been succesfully deleted ')
    }
});
