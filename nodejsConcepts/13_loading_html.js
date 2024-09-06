const http = require('http')
const fs = require('fs')
const { error } = require('console')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/html'
    })
    let name = ""
    // let html = fs.readFileSync('content/subfolder/index.html','utf-8');
    const stream = fs.createReadStream('content/subfolder/index.html',{encoding:"utf-8"})// if the html file is is large to load
    stream.on('data',(chunks)=>{
        name+=chunks
    })
    
    stream.on('end',()=>{
        res.end(name)
    })
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000')
})