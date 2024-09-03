const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/html'
    })
    const name = "sriram"
    let html = fs.readFileSync('content/subfolder/index.html','utf-8');
    res.end(html)
    // fs.createReadStream('content/subfolder/index.html').pipe(res)// if the html file is is large to load
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000')
})