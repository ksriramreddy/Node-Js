const express = require('express')

const app = express()
const data = require('./data')
app.get('/',(req,res)=>{
    res.send('<h1>HOMP PAGE</h1> <a href="api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProduct = data.map(product=>{
        const {id,name} = product
        return {id,name}
    })
    res.send(newProduct)
})
{
    // app.get(`/api/products/:id`,(req,res)=>{
    //     console.log(req.params);
    //     const {id} = req.params
    //     const product = data.find(product=> product.id == id)
    //     if(product){
    //         res.send(product)
    //     }else{
    //         res.status(404).send('Product not found')
    //     }
    // })
}

{
    app.get('/api/products/query',(req,res)=>{
        const {limit,price} = req.query
        let newProducts = [...data]
        if(limit){
            newProducts = newProducts.slice(0,parseInt(limit))
        }
        if(price){
            newProducts = newProducts.filter(product=>{
                return product.price<=price
            })
        }
        newProducts.length?res.send(newProducts):res.send("no products available")
    })
}


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})