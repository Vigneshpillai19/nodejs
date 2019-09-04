// const Person = require('./person');

// const person1 = new Person('Vignesh Pillai','19');
// person1.greeting();

const http = require('http');
const path = require('path');
const fs = require('fs');

// http.createServer((req,res) => {
//     res.write('<h1>Hello World!!!!!<h1>');
//     res.end()
// }).listen(5000,() => console.log('Server running......'));

const server = http.createServer((req,res) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content) => {
    //         if (err) throw err;
    //         res.writeHead(200,{ 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }else if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content) => {
    //         if(err) throw err;
    //         res.writeHead(200,{ 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }else if(req.url === '/api/users'){
    //     const users = [
    //         { name:"Abc",uid:123 },
    //         { nme:"Pqr",uid:456 }
    //     ];
    //     res.writeHead(200,{ 'Content-Type' : 'application/json' });
    //     res.end(JSON.stringify(users));
    // }else{
    //     res.writeHead(200,{ 'Content-Type': 'text/html' });
    //     res.end("<h3>Url Not Found......</h3>");
    // }

    // Biuld File Path
    let filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html' : req.url);

    // Extension of File
    let extType = path.extname(filePath)

    // Content-Type
    let contentType = 'text/html';

    switch(extType){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath,(err,content) => {
        if(err){
            if(err.code == 'ENOENT'){
                // Page not Found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) => {
                    res.writeHead(200,{ 'Content-Type' : 'text/html' });
                    res.end(content,'utf-8');
                });
            }else{
                // Some Server Error
                res.writeHead(500);
                res.end('Server Error ' + err + ' ....');
            }
        }else{
            // Success
            res.writeHead(200,{ 'Content-Type' : contentType });
            res.end(content,'utf-8');
            // res.sendFile(__dirname + '/about.html',{name:'Vignesh'});
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => console.log('Server running on port ' + PORT));