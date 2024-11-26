//This is our first _simple application that is a form actually with backend...
//dependencies_________
const express = require("express");
const mongoose = require("mongoose");
const contactRoute = require("./Routes");


//main application_________________
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set("view engine","ejs");   


//Initialize the contacts route......
app.use("/contact",contactRoute);


//_____Setup two basic route....
app.get("/",(req,res)=>{
    res.send("<h3>Welcome to Root page of our contact store system</h3>")
})
app.get("*",(req,res)=>{
    res.send("<h3>Four__Zeor__Four_____{nof}</h3>")
})



//Server opening port..............
const port = 6060;


//Listen server with activating dB______in backend_______
let db_Pass = encodeURIComponent("123ASDasd@&");
let url = `mongodb+srv://hayat:${db_Pass}@cluster0.ardgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url)
    .then(()=>{
        app.listen(port,()=>{console.log("Running the server on port __ "+port)})
    })
    .catch(e=>console.log("Something wrog to connecting with Datab"))
    .catch(e=>console.log("Something wrog to connecting with Databse"))


// app.listen(port,()=>console.log(port))