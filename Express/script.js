const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>HOME</h1>");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`Server runnning on ${PORT}`));




























