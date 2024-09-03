const fs = require('fs');
{
    // setImmediate(()=>{
    //     console.log('setImmediate');
    // })
    // setTimeout(()=>{
    //     console.log('setTimeout');
    // }, 0)
    // //same as setTimeout() with 0ms ans readFile() the execution oreder is not determined it depends on the computers speed
}

{
    setImmediate(()=>{
        console.log('setImmediate 1');
        process.nextTick(()=>{
            console.log('nextTick 1');
        })
        Promise.resolve().then(()=>{
            console.log('promise 1');
        })
    })
    setTimeout(() => {
        console.log('setTimeout 1');
    }, 0);
    setImmediate(()=>{
        console.log('setImmediate 2');
        
    })
    
}