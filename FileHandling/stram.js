const fs = require('node:fs');

const readableStream = fs.createReadStream("./t1.txt",{
    encoding:"utf-8",
    highWaterMark:2,
});

const writableStream = fs.createWriteStream("./t2.txt");


readableStream.pipe(writableStream);

// readableStream.on("data",(chunk)=>{
//     console.log(chunk);
//     writableStream.write(chunk)
// }); 