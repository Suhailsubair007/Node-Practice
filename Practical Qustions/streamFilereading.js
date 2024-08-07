const fs = require('fs');
const readstream = fs.createReadStream('1.txt',"utf-8");
const writestream = fs.createWriteStream("2.txt","utf-8");

readstream.pipe(writestream);

writestream.on('data',()=>{
    console.log("reading suceesfull");
});

readstream.on('error',(err)=>{
    console.log(err);
    
});

writestream.on('data',(err)=>{
    console.log(err);
    
})





// const fs = require('fs');

// const readstream = fs.createReadStream('1.txt','utf-8');

// readstream.on('data',(chunk)=>{
//     console.log("Readed succesfully..",chunk);
// });

// readstream.on("error",(err)=>{
//     console.log(err);
    
// })

