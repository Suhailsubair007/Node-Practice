const express = require('express');
const app = express();

const middleWare = function(req,res,next){
    console.log('Hi i am middle ware....');
    next();
};


app.use(middleWare);

app.get('/',(req,res)=>{
    res.send('hI SUHAILLLLL')
});

app.listen(3000,()=>{
    console.log("Listning to the post 3000");
    
});









// const express = require('express');
// const app = express();

// // Route that triggers an error
// app.get('/error', (req, res, next) => {
//     const err = new Error('Something went wrong!');
//     err.status = 500;
//     next(err);
// });

// // Route that works fine
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
// });



// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

