const crypto  = require('crypto')
{
    console.time("fun")
    // crypto.pbkdf2Sync('password','salt',1000,512,'sha256');
    // //pbkdf2Sync is an sync funton that will hash the password using the salt algorithm
    // // here each funtion runs on main thread one after other which is time consuming
    // crypto.pbkdf2Sync('password','salt',1000,512,'sha256');
    // crypto.pbkdf2Sync('password','salt',1000,512,'sha256');
    // crypto.pbkdf2Sync('password','salt',1000,512,'sha256');
    // thses 3 funtions takes 44ms to execute (12ms each apprx)
    console.timeEnd("fun")
}

{
    
    let total = 0;
    for(let i=0;i<3;i++){
        const start = Date.now() 
        crypto.pbkdf2('password','salt',1000,512,'sha256',(err,hash)=>{
            // console.log(hash.toString('hex'));
            total += (Date.now() - start)
            console.log(total);
            
        });
    }
    // console.log(  Date.now()-start);
    
}