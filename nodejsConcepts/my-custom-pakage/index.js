// import {upperCase} from 'upper-case' // javascript syntax
const upperCase = require('upper-case');



function greetings(name){
    console.log(`greetings ${upperCase(name)}`);
}
greetings('sriram')
module.exports = greetings
//// package.json file is a configuration file that contains  all the important //mata data and all dependencies that are required for the project