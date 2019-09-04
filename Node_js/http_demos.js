const http = require('http');
const path = require('path');
const fs = require('fs');

// http.createServer((req,res) => {
//     res.write('<h1>Hello World!!!!!<h1>');
//     res.end()
// }).listen(5000,() => console.log('Server running......'));

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('<h1>Home Page</h1>');
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => console.log('Server running on port ' + PORT));