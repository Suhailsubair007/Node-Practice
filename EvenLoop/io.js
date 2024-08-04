// const fs = require('fs');
// setTimeout(()=>{
//     console.log("Hi i am timeout");
// },0);
// fs.readFile(__filename,()=>{
//     console.log("This is readfile 1");
// });

// process.nextTick(()=>console.log("This is process.nexttick"));
// Promise.resolve().then(()=>{
//     console.log("This is promise resolve 1");
// });

// fs.readFile(__filename,()=>{
//     console.log("This is readfile 2");
// });



const fs = require('fs');
setTimeout(()=>{
    console.log("Hi i am timeout");
},0);
fs.readFile(__filename,()=>{
    console.log("This is readfile 1");
});