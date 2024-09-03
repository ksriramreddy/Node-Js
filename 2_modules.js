const printName = (name)=>{
    console.log("my name is "+name);
}

// printName("sriram")
module.exports.printName = printName // adding exports to this module... so we can use in differnt file

// other way of exporting is...
const person = {
    name : "sriram",
    age : 12
}
module.exports.items = [1,2,3,4];
module.exports.person = person
// console.log(module);


function randon(){
    console.log("when this function is called in this module it will also executed when this module is imported to another module");
    // this function is executed only when this module is called in this module
}

randon()