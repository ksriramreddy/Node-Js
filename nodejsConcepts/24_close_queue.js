const fs = require('fs');

{
    const redableStream = fs.createReadStream(__filename)
    redableStream.close()

    redableStream.on('close', () => {//  this is how we queue callbacs to close queue
        console.log('File is open for reading')
    })

    setImmediate(()=>{
        console.log('setImmediate 1')
    })
    
    setTimeout(()=>{
        console.log('setTimeout 1')
    }, 0)

    process.nextTick(()=>{
        console.log('process.nextTick 1')
    })
    Promise.resolve().then(()=>{
        console.log('promise 1')
    })


}