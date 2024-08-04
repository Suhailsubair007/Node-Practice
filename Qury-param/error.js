// const express = require('express');
// const app = express();

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
//     next()
// });
// app.get('/',(err)=>{
//     console.log(err);
// })
// app.listen(3000);






const express = require('express')
const fs = require("node:fs");

fs.unlink('del.txt',(err,data)=>{
    if(err)
    {
        console.log(err);
        
    }else{
        console.log(data);
        
    }
    
});


