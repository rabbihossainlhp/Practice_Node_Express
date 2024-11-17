//we will learn about the module of Node__JS.....

console.log(module);

console.log("Hello");


//right now we're going to test our first module importing.....
const {allCal} = require("./math");

const S = allCal(45,45);
console.log(S);


//this imported module is working correctly.....
