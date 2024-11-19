//Write the main application from here.....
//dependencies....
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Routes");



//main application
const app = express();

app.use(express.json());

//some routes.....
app.use("/contacts",Router);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home page....</h1>")
})


//Opening port....
const port = 7444;


//Some checking for db connection....
let url_Pass = encodeURIComponent("123ASDasd@&");
let url = `mongodb+srv://hayat:${url_Pass}@cluster0.ardgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//listen server....
mongoose.connect(url,{useNewUrlParser:true})
        .then(()=>{
            app.listen(port,()=>{
                console.log("your server is opened on port____"+port);
            });
        })
        .catch(e=>console.log("Some error may occures"+e));
