
// DISPLAY JSON OBJECT IN RESPONCE

// const http = require('node:http');

// const server = http.createServer((request, response) => {
//     const person = {
//         name: 'Suhail',
//         age: 20,
//     };

//     response.writeHead(200, {"Content-Type": "application/json"});
//     response.end(JSON.stringify(person));
// });

// server.listen(3000, () => {
//     console.log("Server successfully running on port 3000");
// });


//Display html elemets in server

// const http = require('node:http');
// const fs = require('node:fs')

// const server = http.createServer((request, response) => {
//     response.writeHead(200,{"Content-Type": "text/html"});
//     response.end("<h1>Hi i am from server </h1>");
// });

// server.listen(3000, () => {
//     console.log("Server successfully running on port 3000");
// });




//while response display a html file 

// const http = require('node:http');
// const fs = require('node:fs')

// const server = http.createServer((request, response) => {
//     response.writeHead(200,{"Content-Type": "text/html"});
//     const html =fs.readFileSync("./index.html","utf-8");
//     response.end(html);
// });

// server.listen(3000, () => {
//     console.log("Server successfully running on port 3000");
// });



// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



//Using straeams 

// const http = require('node:http');
// const fs = require('node:fs')

// const server = http.createServer((request, response) => {
//     response.writeHead(200,{"Content-Type": "text/html"});
//     fs.createReadStream("./index.html").pipe(response);
//     // response.end("<h1>Hi i am from server </h1>");
// });

// server.listen(3000, () => {
//     console.log("Server successfully running on port 3000");
// });


const http = require('http');
const fs = require('fs');

const app = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    const html = fs.readFileSync('./login.html','utf-8');
    res.end(html);
});

app.listen(4000,()=>{
    console.log("Listining to port 3000...");
    
});
