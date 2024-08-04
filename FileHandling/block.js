// const fs = require('node:fs');

// //Blocking thread => its a synchrounus activity its not async
// console.log("one");
// const result = fs.readFileSync('contact.txt', 'utf-8');
// console.log(result);
// console.log("Two");



const fs = require('node:fs');

//Non  - Blocking thread => its asynchrounus activity its async
console.log("one");
fs.readFile('contact.txt', 'utf-8',(err,result)=>{
    console.log(result);
});

console.log("Two");


