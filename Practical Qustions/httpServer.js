const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method==='GET'&& req.url==='/')
    {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Hi</h1>");
    }else if (req.method==='GET'&& req.url==='/home')
    {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Home</h1>");
    }
});

server.listen(3000, () => {
    console.log("Listening to the server on port 3000");
});
