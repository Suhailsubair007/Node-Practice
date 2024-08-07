// const express = require('express');
// const app =express();

// app.get('/sum',(req,res)=>{

// const num1 = parseInt(req.query.num1);
// const num2 = parseInt(req.query.num2);
// const sum = num1 + num2;

// res.send(`Th sum of ${num1} and ${num2} is ${sum}`);


// });

// app.listen(3000,()=>{
//     console.log("Listning to the port 3000");  
// });






const express = require('express');
const app = express();
const port = 3000;

// Route with route parameters
app.get('/user/:name/:age', (req, res) => {
    // Access route parameters using req.params
    const name = req.params.name;
    const age = req.params.age;
    
    res.send(`Hello, ${name}! You are ${age} years old.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
