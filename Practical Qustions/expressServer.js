const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('<h1>Hi suhaillllll</h1>');
});

app.listen(3000,()=>{
    console.log("Listning to port 3000"); 
});