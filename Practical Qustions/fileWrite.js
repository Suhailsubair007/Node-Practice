const fs = require('fs');

// fs.writeFile('2.txt',"Hi akkukuttaaaaaaaaaaaaaa",(err)=>{
//     console.log(err);
//     console.log("skdjhfksd");
    
// });

// console.log("file written successfullyy");


// const content = "\n\nHi akku welcome to brototype!!!";

// fs.appendFile('2.txt',content,(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(data);
        
//     }
// });



fs.unlink('del.txt',(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("File delated ");
        
    }
    
})