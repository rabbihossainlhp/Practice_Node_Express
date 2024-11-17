const express = require("express");

const mainapp = express();
mainapp.set("view engine","ejs");


mainapp.get("/about",(req,res)=>{
    res.render("pages/about",{titleDoc:"about page"});
});

mainapp.get("/help",(req,res)=>{
    res.render("pages/help",{titleDoc:"help page"});
    

});



mainapp.get("/",(req,res)=>{
    let post = {
        NewTitle: "Test post's title here",
        published:true,
        descr:"acutally here is no need of the description "
    }

    let posts = [
        {title:"HEllo EJS",authorS:"Hayat"},
        {title:"HEllo EJS",authorS:"Hayat"},
        {title:"HEllo EJS",authorS:"Hayat"},
        {title:"HEllo EJS",authorS:"Hayat"},
        {title:"HEllo EJS",authorS:"Hayat"},
        {title:"HEllo EJS",authorS:"Hayat"},    
    ];

    
    res.render("pages/index",{title:"Welcome to the first templete engine powerd by EJS...",post,posts});
})



const port = 5000;
mainapp.listen(port,()=>{console.log("Just Open the port....",port)});
