const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer((request, response) => {
    const name = "Ris";
    response.writeHead(200,{"Content-Type": "text/html"});
    let html = fs.readFileSync("./login.html","utf-8");
    html = html.replace("{{name}}",name);
    response.end(html);
});

server.listen(3000, () => {
    console.log("Server successfully running on port 3000");
});
