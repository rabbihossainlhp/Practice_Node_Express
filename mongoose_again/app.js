//dependencies...
const express = require("express");
const mongoose = require("mongoose");
const ContactRouter = require("./Routes");

//main app 
const app = express();
app.use(express.json());


app.use("/contacts",ContactRouter);

//two basic routes...
app.get("/",(req,res)=>{
    res.send("<h2>Welcome to Home page of simple contact api model</h2>")
})
app.get("*",(req,res)=>{
    res.send("<h2>404 not found expected page...</h2>")
})


//port 
const port  = 7000;

//listen with connceting DB...  
let pass = encodeURIComponent('123ASDasd@&');
let url = `mongodb+srv://hayat:${pass}@cluster0.ardgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(url)
                        .then(()=>{
                            app.listen(port,()=>{
                                console.log("Server is opened on port __ ",port)
                            })
                        })
                        .catch(e=>console.log("Error occours to connecting database.."+e))