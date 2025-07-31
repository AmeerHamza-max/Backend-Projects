const path=require('path');
const fs=require('fs');
const { dir, error } = require('console');
const practice='practice.txt';
const filePath=path.join(__dirname,practice);
// fs.writeFile(filePath,'This is first content in the file','utf-8',()=>{
//     console.log('Yes the file has been created ')
// })
const directoryPath=__dirname;
const readDirectory=fs.promises.readdir(directoryPath,'utf-8').then((data)=>{
    if(data){
        console.log('This is the path to being successsful');
    }
    else{
        console.log("If you don't believe in yourself then you will fail baby");
    }
}).catch((error)=>{
    console.log(`If you are thinking about this ${error} and fear of this and then you will never win `)
});
fs.promises.readFile(filePath,'utf-8').then((data)=>{
    if(data){
        console.log('This is the path to being successsful');
    }
    else{
        console.log("If you don't believe in yourself then you will fail baby");
    }
}).catch((error)=>{
    console.log(`If you are thinking about this ${error} and fear of this and then you will never win `)
});
fs.promises.writeFile(directoryPath,'Yeah you are on the path to being sucessfull','utf-8').then((data)=>{
    if(data){
        console.log('This is the path to being successsful');
    }
    else{
        console.log("If you don't believe in yourself then you will fail baby");
    }
}).catch((error)=>{
    console.log(`If you are thinking about this ${error} and fear of this and then you will never win `)
});

fs.promises.appendFile(filePath,'\nThis is the updated content to be successful','utf-8').then((data)=>{
    if(data){
        console.log('This is the path to being successsful');
    }
    else{
        console.log("If you don't believe in yourself then you will fail baby");
    }
}).catch((error)=>{
    console.log(`If you are thinking about this ${error} and fear of this and then you will never win `)
});
// fs.promises.unlink(filePath,'utf-8').then((data)=>{
//     if(data){
//         console.log('This is the path to being successsful');
//     }
//     else{
//         console.log("If you don't believe in yourself then you will fail baby");
//     }
// }).catch((error)=>{
//     console.log(`If you are thinking about this ${error} and fear of this and then you will never win `)
// });




