
/*
NodeJs Globals/Variables

1. __filename -> returns current file name

2. __dirname -> returns current directory
    require -> {
        require(__) is a function which is used to load and execute the specified modules;
        -> loaidng build-in-modules in to projects
        ->one parameter that is module
        -> 'fs' , 'http' , 'path' , 'express' , './mymodule' are some example modules
    }

3. module -> info about current module/contains all methods and funtions inthat module

4. exports -> object that is used to expose variables, functions, objects etc. from a module to other modules

5. process -> global object that provides information about, control, and interaction with the Node.js process. It has info about environment where the program is running(backend server like aws,firebase etc)    

*/

console.log(__filename); // outputs current file name

console.log(__dirname); // outputs current directory

setTimeout(() => {
    console.log('hello world');
    
}, 1000);
// setInterval(() => {
//     console.log('sriram');
    
// }, 500);

console.log(module)

// console.log("exports",exports)