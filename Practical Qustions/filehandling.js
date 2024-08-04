//reading a file Async 

// const fs = require('node:fs');


// fs.readFile('test1.txt','utf-8',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });


//Async writing 

// const fs = require('node:fs');

// fs.writeFile('test2.txt','Hi suhail it is the new file !!!!!',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File written succesfullyy...");
// });



//Sync Reading 

// const fs = require('node:fs');

// try{
//     const data = fs.readFileSync('test1.txt','utf-8');   
//     console.log(data);
// } catch(err) {
//     console.log(err);
// }
// console.log("File read succesfully!!!");










//Synchrounus Writing....

// const fs = require('node:fs');
// const content = "Hi suhail subair , How are you!!!!!!!!";

// try{
//     fs.writeFileSync("test2.txt",content);
//     console.log("File written ");
// } catch(err)
// {
//     console.log(err);
// }



//Appending file

// const fs = require('node:fs');
// const content = "\nHi i am appende content !!!!"
// fs.appendFile('test2.txt',content,(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
// });
// console.log("file written succssfully!!!!");




//Syncronus file handling (appending)

// const fs = require('node:fs');

// const content = "\nHi i am appende content !!!!"

// try {
//     fs.appendFileSync("test2.txt",content)
//     console.log("APPENDED");
// } catch(err){
//     console.log(err);
// }









// const fs = require('node:fs');

// fs.unlink('del.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
   
//     console.log("File deleated succesfullyyy");
// });



// const fs = require('node:fs');

// try{
//     fs.unlinkSync('del.txt')
//     console.log("File deleated succesfullyyy");

// } catch (err){
//     console.log(err);
// }

// console.log("File deleated");





// const fs = require('node:fs');


// fs.rename('test2.txt','akku.txt',(err)=>{
//     console.log(err);
// });


