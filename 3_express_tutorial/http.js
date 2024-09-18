{
    // this is how a web page is loaded using node Server 
    const http = require('http');
    const fs = require("fs")
    const server = http.createServer((req,res)=>{
        const url = req.url
        // let homeHtml = "<h1>hello</h1>"
        // let stream = fs.createReadStream('./NavBar/index.html',{encoding: 'utf8'})
        // stream.on('data',(chunk)=>{
        //     res.end(chunk.toString())
        // })
        const homeHtml = fs.readFileSync('./NavBar/index.html')
        const homeStyle = fs.readFileSync('./NavBar/style.css')
        const homeLogo = fs.readFileSync('./NavBar/logo.svg')
        const homeScript = fs.readFileSync('./NavBar/script.js')
        
        if(url === '/'){
            res.writeHead(200,{"content-type":"text/html"})
            res.end(homeHtml)
        }
        else if(url === '/style.css'){
            res.writeHead(200,{"content-type":"text/css"})
            res.end(homeStyle)
        }
        else if(url === '/logo.svg'){
            res.writeHead(200,{"content-type":"image/svg+xml"})
            res.end(homeLogo)
        }
        else if(url === '/script.js'){
            res.writeHead(200,{"content-type":"application/javascript"})
            res.end(homeScript)
        }
    })
    server.listen(3000,()=>{
        console.log('running port 3001');  
    })
}
    