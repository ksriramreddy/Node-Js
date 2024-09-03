const http = require('http');

const server = http.createServer((req,res)=>{

    const data = {
        name:'John Doe',
        age:30,
        address:{
            street:'123 Main St',
            city:'New York'
        },
        hobbies:['reading','painting']
    }

    res.writeHead(200,{'Content-Type': 'application/json'})
    
    res.end(JSON.stringify(data));
})

server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})