const express = require('express');

const app = express();

{
    // const loader = (req,res,next)=>{
    //     const method = req.method
    //     const url = req.url
    //     const date = new Date().getFullYear()
    //     console.log(method, url, date);
    //     next(); // call the next middleware function if it exists
    //     // res.send('Hello World!'); // send response if no middleware function exists
    // }
}

const {loader3,loader,loader2} = require('./loader') 

// if you want to execute the loader for all urls you can use app.use(function) insted of passing to all functions

// app.use(loader) // this will call the loader function for all urls

// app.use('/about',loader) // this will run the function for all urls that goes with /about/.../...

app.use('/',[loader3,loader,loader2])// this will execute all the middleware functions one by one

app.get('/query',loader3,(req,res)=>{
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.get('/contact', (req, res) => {   
    res.send('contact Page');
})
app.get('/about/books', (req, res) => {
    res.send('About Book');
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
