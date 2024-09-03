/*

-----------------EVENT LOOP-------------------

-> Event loop is an continuous execution of ASYNC callbacks/functions;
-> The Sync function get priority over the Async function;
-> Once the execution of the sync function completes, the Event loop comes in to Picture
-> The event loop continuously executes untill all the callbacks/functions are executed


-----------------------AFTER CALLSTACK IS EMPTY--------------------

-> EVENT LOOP STARTS(check 18_event_loop.png)

1. All the callbacks/functions in MICRO TASK QUEUE are executed first
        -> in that
            1st. NextTick queue
            2nd. Promise queue
2. All the callbacks/functions in TIMERQUEQUE are executed
        -> eg- 
            setTimeout()
            setInterval()
3. After all callbacks/functions in TIMERQUEQUE it will again check the MICRO TASK and execute the callbacks/functions in MICRO TASKQUEQUE in same order

4. Next all callbacks/functions in I/O queue will be executed

5.Again it will check and execute the callbacks/functions in MICRO TASKQUEQUE

6. Next it will execute all callbacks/functions in CHECK QUEUE 

7. After all callbacks/functions in CHECK QUEUE it will again check and execute the callbacks/functions in MICRO TASKQUEUE

8. Next it will execute all callbacks/functions in CLOSE QUEUE

9. After all callbacks/functions in CLOSE QUEUE it will again check and execute the callbacks/functions in MICRO TASKQUEUE


This process will be repeated untill all the callbacks/functions are executed
after that the event loop will be executed

*/