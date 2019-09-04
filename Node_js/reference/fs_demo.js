// used for working with file System
// fs stands for File System or File Server
const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname,'/test'), {} , function(err){

// }) 
// or
// For Single argument there is no need of paranthesis
fs.mkdir(path.join(__dirname,'/test'), {} , err => {
    if (err) throw err;
    console.log("Folder Created.....");
});

fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World.....',err => {
    if(err) throw err;
    console.log('File Written to......')
});

fs.appendFile(path.join(__dirname,'test','hello.txt'),'Learning Node js',err => {
    if(err) throw err;
    console.log('Appended Successfully....');
});

fs.readFile(path.join(__dirname,'test','hello.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
