//Main file....
//Dependencies...
const express = require("express");
const contactRoute = require("./RouteHandler");


//main application
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//contacts--- route handler...
app.use("/contacts",contactRoute);



//_____________
//root__route
app.get("/",(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.json({message:`Welcome to beginner contact api system...{use the correct route to reach}`})
})




//port
const port = process.env.PORT || 8000;


//listening port 
app.listen(port,()=>{console.log(`Server is running on __${port}__port...`)})