//learn about the path module of system...
//import first the path module....
const { dir } = require("console");
const path = require("path");

//two importent things ...
let fileName = __filename;
let dirName = __dirname;

//few simple function of file and dir..
console.log(path.basename(fileName));
console.log(path.dirname(dirName));

console.log(path.extname(fileName));


//convert a object into usable path or a string path....
let ObjPath = {
    dir:"user/hello",
    name:"nextFile",
    ext:".txt"
}

console.log(ObjPath);
console.log(path.format(ObjPath));


//more three another path's function or module...
console.log(path.isAbsolute("./module.js")); //this will return true/false if current file or directory is available...

console.log(path.join("user","local","host","rabbiHossain","newFile.html")); // this will make the proper path from this many differnt path

console.log(path.resolve(dirName,"home","test.txt"));

console.log(path.parse(fileName));