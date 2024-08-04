const http = require('node:http');

const app = http.createServer((req,res)=>{
    console.log(req.method);
    res.end("Hellooooooo");
});

app.listen(3000,()=>{
    console.log("Listning to port 3000");
    
})


