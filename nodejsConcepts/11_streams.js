
const fs = require('fs')

fs.writeFileSync("content/subfolder/text.text","i am sriam",{flag: 'a'})
const readable = fs.createReadStream('content/subfolder/text.text',{encoding:"utf-8",
    highWaterMark:2
})

const writable = fs.createReadStream('content/subfolder/text.txt',{
    encoding:"utf-8",
})

readable.on("data",(chunk)=>{
    console.log(chunk)
    writable.write(chunk)
})
