const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json([{
        name: 'sriram',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'New York'
        },
        hobbies: ['reading', 'painting']
    }])
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})