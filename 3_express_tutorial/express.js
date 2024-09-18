// const app = require("express")() //directly invoking the express class

const express = require("express")
const path = require("path")
const app = express()

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.use(express.static('./public'))// this is an  built in middleware function, this will search all static files ans render them(serves static files) 
app.get('/about',(req,res)=>{
    res.status(200).send('About Page')// we alsoadd status code
})

app.get('/',(req,res)=>{
    // res.send('Hello World!')
    // we also can send a file as response like (html,json,css,js) insted of reading  files int variables
    res.sendFile(path.resolve(__dirname,'./NavBar/index.html'))
    // res.sendFile(path.resolve(__dirname,'./NavBar/style.css'))
})



app.all('*',(req,res)=>{
    res.send("<h1>No Page Found</h1>")
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})