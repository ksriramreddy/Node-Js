const fs = require('fs');
{
    fs.readFile(__filename,()=>{
        console.log('file read completed');
    })
    setImmediate(()=>{
        console.log('setImmediate executed');
    })
    // according to event loop the I/O queue needs to be executed but here we see setImmediate is executed
    // it is because of "I/O pooling" at first time the readFile() is not pushed in to I/O queue. it  onlu pushed after it execution so since there in no task in I/O queue it will execute setImmediate() after that the readFile() will be pushed in to I/O queue in second iteration of event loop the I/O queue will be executed
}