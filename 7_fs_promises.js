const fs = require('fs/promises');

// in promise based fs module it returns a promise  and we can use ".than" ".catch" mothods
console.log('1');
fs.readFile('content/subfolder/text.text','utf-8')
.then((data)=>{
console.log(data);
})
console.log('2');

fs.writeFile('content/subfolder/text.txt'," writing file with promises",{
    flag:'a'
})
.then(()=>{
    console.log("File written successfully");
    
})