const http = require('node:http');
// const fs = require('node:fs');


const server = http.createServer((request, response) => {
     const url = request.url;// Define the url variable

    if (url === "/") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Home page");
    } else if (request.url === "/about") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("About page");
    } else if (request.url === "/profile") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Profile page");
    } else if (request.url === "/api") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({
            name: "suhail",
            age: 20,
        }));
    } else {
        response.writeHead(404);
        response.end("Page not found.....");
    }
});

server.listen(3000, () => {
    console.log("Server successfully running on port 3000");
});
