const fs = require('fs');

console.log("1");

 const  file_reader = fs.readFileSync('content/subfolder/text.text',"utf-8");
 //readFileSync() used to read the file data fron specified file
 //the sync indicated synchronus... this function will  
 console.log(file_reader);
 console.log('2');

 console.log('3');

 fs.readFile('content/subfolder/text.text',"utf-8",(err,data)=>{
    if(err) console.log("error occured");
    else console.log(data)
 })
 // readfile(_,_,_) is an async function which will continue execution of other functions untill it completes reading the file, it accepts callback function which will be called after it completes reading file and it has 2 arguments "error" and "data"
 console.log('4');

 /////////// writing in to file //////////////////////////////////

 fs.writeFile('content/subfolder/text.text'," writing to file",{
    flag:'a' // 'a' appending mode, 'w' writing mode, 'r' reading mode,
 })
 console.log('5');

 console.log('6');
 fs.writeFile('content/subfolder/text.text',"another text",{
    flag:'a'},
    (err, data) =>{
        if(err) console.log("error occured");
        else console.log("success")
    }
)

 
 