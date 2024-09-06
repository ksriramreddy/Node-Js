const EventEmitter = require('events')

// // this module allowa us to add events and emmit events listeners
// // this module will return a class so we have to create a object to that class

// const event = new EventEmitter();
// console.log('1');

// event.on('order',()=>{ // event.on() -> will add listeners to events
//     console.log("event called using event.on()");
// })

// console.log('2');

// event.addListener('order',()=>{
//     console.log('event called using event.addListener()');
// })


// event.emit('order'); // event.emit() -> will emit the event to all listeners
// console.log('3');

// since EventEmitter is an class we can extend it to other classes and use all the event funtions to add listeners

class Order extends EventEmitter{
    constructor(){
        super();
        this.orderNo = 0;
        this.on("order",()=>{
            console.log('order placed')
        })
    }

    
    placeOrder(){
        this.orderNo++;
        this.emit('order');
    }
    getOrderNumber(){
        return this.orderNo;
    }
}

module.exports =  Order;