const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 30;

// by default the pool size is 4
// with this we can increase the pool size
// if the pool size greater than our CPU pool size it will guggles the function between threads and try to maintain equal time is taken to execute
let start = Date.now()
for(let i=0;i<30;i++){
    crypto.pbkdf2('password',"salt",1000,512,'sha256',()=>{
        console.log(i,Date.now()-start);
    })
}

