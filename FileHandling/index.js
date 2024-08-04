const fs = require('node:fs/promises');



// console.log("Strat");
// fs.readFile("./test.txt", "utf8")
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));
// console.log("end");



async function readFile(){
    try{
        const data = await fs.readFile("./test.txt", "utf8");
        console.log(data);
    } catch(err){
        console.log(err);
    }
}

readFile();