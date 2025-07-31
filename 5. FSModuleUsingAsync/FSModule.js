const { error } = require('console');
const fs=require('fs');
const path=require('path');
const FileName='fsAsync.txt';
const filePath=path.join(__dirname,FileName);
fs.writeFile(filePath,'This is the initial Data','utf-8',(error)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log('File has been saved');
    }
});
fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})
//path,data,option,callback
fs.appendFile(filePath,'\nThis is the Updated Data','utf-8',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File has been Saved');
    }

})
fs.unlink(filePath,(err)=>{
    if(err){
        console.log('This is the error');
    }
    else{
        console.log('File has been deleted')
    }
})
