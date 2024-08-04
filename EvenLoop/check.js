const fs = require('fs');

fs.readFile(__filename,()=>{
    console.log("This is readfile 1");
});

process.nextTick(()=>{
    console.log("Hi i am nexttick");
});

Promise.resolve().then(()=>{
    console.log("Hi i am proise ");
});


setTimeout(()=>{
    console.log("Hi i am timeout");
},0);

setImmediate(()=>{
    console.log(" i am setimmediate");
})