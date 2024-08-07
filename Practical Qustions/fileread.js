const fs = require('fs');

// fs.readFile("1.txt",'utf8',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
        
//     }else{
//         console.log(data);
//         console.log("File read succesfully!!!!");
//     }
    
// });

const data = fs.readFileSync('1.txt','utf-8');
try{
    console.log(data);
    
} catch(err) {
console.log(err);

}
