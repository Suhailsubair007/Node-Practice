// const http = require('http');

// const server = http.createServer('/home',(req,res)=>{
//     res.writeHead(200);
//     res.end('Hello');

// });

// server.listen(3003);



const express = require('express');
const app = express();

// Define a route with multiple parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
  // Access the route parameters
  const userId = req.params.userId;
  const bookId = req.params.bookId;
  res.send(`User ID: ${userId}, Book ID: ${bookId}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
