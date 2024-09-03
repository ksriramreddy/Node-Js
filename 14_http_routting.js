const http = require('http');

const server = http.createServer((req,res)=>{
    // req.url -> will provide with the end url like "/about" "/api"
    //with this we can rout between different pages
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end('home page');// localHost.3000
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end('about page');// localHost.3000/about
    }
    else if(req.url === '/api'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        const data = {name: 'John Doe', age: 30};
        res.end(JSON.stringify(data));// localHost.3000/about
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('Not Found');//// localHost.3000/wkdj
    }
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})