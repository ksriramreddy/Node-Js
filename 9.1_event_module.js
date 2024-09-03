const Order = require('./9_event_module')
const order = new Order()
// order.on("order",()=>{
//     console.log('order placed')
// })
order.placeOrder()

order.placeOrder()
order.placeOrder()
console.log(order.getOrderNumber());