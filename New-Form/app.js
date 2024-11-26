//this is the index file mainly.........
//dependencies.....
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const basicRoute = require("./Routes/HomeRoute");
const contactsRoute = require("./Routes/ContactRoutes");
/**
 * 
 * 
 * 
 * 
 */
const app = express();
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
/**
 * 
 * 
 * 
 * 
 */
//Rute for differnt work like from fillup...
app.use("/contacts",contactsRoute);
/**
 * 
 * 
 */
//Some basic routes handle here
app.get("/",basicRoute);
app.get("*",basicRoute);
/**
 * 
 * 
 * 
 * 
 */
//Port.......
const Port = 4545;
/**
 * 
 * 
 * 
 * 
 */
//Listen & run by activating database...
let pass = encodeURIComponent("123ASDasd@&");
let url = `mongodb+srv://hayat:${pass}@cluster0.ardgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//
//
//
mongoose.connect(url)
        .then(()=>{
            app.listen(Port,()=>{
                console.log("Your server is Running on port ___ "+Port)
            })
        })
        .catch(e=>{console.log("something is wrong to connecting DB__E:"+e)})