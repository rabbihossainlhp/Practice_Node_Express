const fs = require("fs");

//First off all we will try to write a file 
const DummyJson = {
    Year : 2024,
    Month: "Octobor",
    Day : "Monday",
    DD : 28,
    Time: "15:38"
}

const StringifyData = JSON.stringify(DummyJson);

fs.writeFile("test.txt",StringifyData,(er)=>{
    if(!er){
        console.log("File successfully written");
    }else{
        console.log("Something went wrong:: ",er);
    }
})


//Read File...
fs.readFile("test.txt",(err,bufferData)=>{
    if(err){console.log("Something went wrong to read data")}
    else{
        const readableData = JSON.parse(bufferData);
        console.log(readableData);
    }
})