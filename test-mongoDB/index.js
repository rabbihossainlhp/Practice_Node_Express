//dependencies....
const express = require("express");
const mongoose = require("mongoose");

//application 
const app = express();


    let Schema = new mongoose.Schema({
        name:String,
    });

    let Test = mongoose.model(`Test`,Schema);



app.get("/",(req,res)=>{

    let test = new Test({
        name:"Hayat",
    })

    test.save()
        .then(t=>{
            res.json(t)
        })
        .catch(e => console.log(e))

})


//port 
const port = 4000;

const encodePass = encodeURIComponent("123ASDasd@&");

//listening.
mongoose
    .connect(`mongodb+srv://hayat:${encodePass}@cluster0.ardgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,{
        useNewUrlParser:true,
        useUnifiedTopology:true})   
        .then(()=>{
            app.listen(port,()=>{
                console.log("server running on port__",port);
            });
        }).catch(e=>console.log(e));
