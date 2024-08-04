const express = require('express');
const app = express();

app.get('/sum',(req,res)=>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = num1 + num2;
    res.send(`THE sum of ${num1} and ${num2} is ${sum}`);

})


app.listen(3001,()=>{
    console.log("Listening to port 3000....");
})