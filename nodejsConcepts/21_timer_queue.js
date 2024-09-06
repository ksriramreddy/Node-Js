{
    setTimeout(() => {
    console.log('timeout 1');
    process.nextTick(() =>{
        console.log('nextTick 1');
    })
    /*
    the event loop will check for MICRO TASK QUEUE first since there is no callbacks it will go to TIMER QUEUE so after executing "timeout 1" it will check the MICRO TASK QUEUE again so it will print "nextTick 1"

    after every callback in any queue it will check the MICRO TASK QUEUE again
    */
    setTimeout(() => {
        console.log('timeout 2');
        
    }, 500);
    }, 500);
    
    setTimeout(() => {
    console.log('timeout 3');
    }, 500);
}