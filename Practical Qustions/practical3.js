// const express = require("express");
// const fs = require('fs');


// fs.readFile('test1.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(data);
        
//     }
    
// })


// console.log("Hi i will come first!!!!!!!");


// const data = fs.readFileSync('test1.txt','utf-8');
// console.log(data);
// console.log("HI i will come last");






// const EventEmitter = require('node:events');
// const emitter = new EventEmitter();

// emitter.on('event',()=>{
//     console.log('Event is emitted!!!!!');  
// })

// emitter.emit('event');




// const path = require('path')

// console.log(path.extname(__filename));


// const fs = require('fs');
// fs.unlink('test1.txt',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("File removed sussefully");
//     }
    
// })














const express = require('express');
const app = express();

// Middleware function to check if the user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        res.redirect('/login');
    }
}

// Public route
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

// Route that requires authentication
app.get('/dashboard', isAuthenticated, (req, res) => {
    res.send('Welcome to the dashboard!');
});

// Login route (for demonstration purposes)
app.get('/login', (req, res) => {
    res.send('Please log in.');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
