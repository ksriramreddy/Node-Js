const buffer = new Buffer('hello world','utf-8')
// buffer is a small unit of storage space which is used to store the incoming data and it has fixed length of size
console.log(buffer.toString());// this will encode and print the string
console.log(buffer.write('sriram'));// this will allow us to write into the buffer. since it is anfixed length it will overwrite the previous text from start
console.log(buffer.toString());
