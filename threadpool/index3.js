const crypto = require('node:crypto');


process.env.UV_THREADPOOL_SIZE = 6;
const MAX_CALL = 6;
const start = Date.now();


for(let i =0; i<MAX_CALL; i++)
{
    crypto.pbkdf2("password","salt", 100000 , 512, "sha512",()=>{
        console.log(`Hash: ${i+1}`,Date.now() - start);
    });
    
}
