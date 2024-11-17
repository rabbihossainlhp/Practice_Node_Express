//Dependencies...
const express = require("express");
const contactRoute = require("./allRoute");
const morgan = require("morgan");

//main application...
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/contacts",contactRoute);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to our contacts finding site</h1>")
})
app.get("*",(req,res)=>{
    res.send("<h1>404 not found!! please use the correct route....</h1>");
})



//Opening Port...
const Port = process.env.port || 4545;

//listening...
app.listen(Port,()=>{
    console.log("Running your server on__"+Port);
})

