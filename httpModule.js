const http = require("http");
const fs = require("fs");

const create = http.createServer((req,res)=>{
    console.log(req.url);

    fs.readFile("./http.html",(er,data)=>{
        res.write(data);
        res.end();
    })
})


create.listen(2024,()=>{
    console.log("your server is opened on 2002 port..");
})