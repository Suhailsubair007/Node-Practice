// const EventEmitter = require('node:events');

// const emitter = new EventEmitter();

// emitter.on("order-piza",(size,topping)=>{
//     console.log(`order recived!!! size is ${size} and topping is ${topping}`);
// });
// emitter.on("order-piza",(size)=>{
//     if(size==="large")
//     {
//         console.log("Size is large ");
//     }
// })

// emitter.emit("order-piza","large","chicken");













const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on("order-piza" ,()=>{
    console.log("Hi order is resived...");
});


emitter.emit("order-piza");






// const express = require('express'); // Make sure to require express

// const app = express();

// app.get('/', (req, res) => {
//     res.send(`<h1>The method of the request is ${req.method}</h1>`);
// });

// app.listen(3000, () => {
//     console.log("Listening to port 3000");
// });
