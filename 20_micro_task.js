// how MICRE TASK  QUEUE will work

// Node.js uses an event loop and a libuv event queue to handle asynchronous I/O and other tasks. It's important to understand that while libuv handles most of the heavy lifting, Node.js itself provides an event loop that manages callbacks, timers, and other events.

// the EVENT LOOP will execute the MICRE TASK QUEUE first 

    // the include 1. process.nextTick()
    //             2. promise()
    {
        //   console.log('1');// these has 1st priority in call stack
        //   process.nextTick(()=>{
        //     console.log('nextTick 1');
        //   })
        //   console.log('2');// after this it will enter to EVENT LOOP
    }
      
    {
        // Promise.resolve().then(()=>{
        // console.log('promise 1');
        
        // })
        // process.nextTick(()=>{
        // console.log('nextTick 1');// since nextTick() has higher priority than promise in MICRO TASK QUEUE it will execute first
        // });
    }
    
    {
        // untill any queue is empty the execution of all callbacks will be done even any callback is pushed into the queue it will execute untill it is empty
    
        process.nextTick(()=>{
            console.log('nextTick 1');
        process.nextTick(()=>{
            console.log('nextTick 2');// this call back is pushesto queue after execution of 1st callback
        })
        });
    
        Promise.resolve().then(()=>{
            console.log('promise 1');
            Promise.resolve().then(()=>{
                console.log('promise 2');
            })
        })
        process.nextTick(()=>{
            console.log('nextTick 3');
        })
    
        Promise.resolve().then(()=>{
            console.log('promise 4');
            
        })
    }
    
    // all the callbacks will be executed before going to another queue, even though  any new callback is pushed it need to executed untill it gets empty