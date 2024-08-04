const express = require('express');
const app = express();
const fs = require('node:fs')


app.get('/',(req,res)=>{
    const stream = fs.createReadStream('./aa.txt',"utf8");
    stream.on("data",(chunk)=>res.write(chunk));
    stream.on("end",()=> res.end());
})

app.listen(3001,()=>{
    console.log("Port running on 3001");
    
});