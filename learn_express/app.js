//in this programm we will learn the basics of "express";

const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes");
const diffRoute = require("./diffMethod");


const mainapp = express();

// mainapp.use(morgan("dev"));

//Coustom__Middleware....
function CoustomMiddleware (req,res,next){
    console.log("Hello , I'm logged..");
    if(req.url === "/setting"){
        res.send(`<p>This page is blocked by admin can't reach this page..</p>`)
    }else{
        next();
    }
}

function tinyLogger (){
    return (req,res,next)=>{
        console.log(req.url, "and", req.method);
        next();
    }
}


const middlewareCollections = [CoustomMiddleware,tinyLogger()];




// mainapp.get("/about",(req,res)=>{
//     res.send(`<h1>Welcome to about page..</h1>`)
// })

// mainapp.get("/setting", (req,res)=>{
//     res.send(`<h2>Setting page</h2> <br/> <p>set up your profile here.......</p>`)
// })

mainapp.use("/user",userRouter);
mainapp.use("/post",diffRoute);


mainapp.get("/",(req,res)=>{
    res.send(`<h1>WELCOME TO HOME Page..</h1>`)
})

mainapp.get("/products/:id/reviews/:reviewID",(req,res)=>{
    res.send("Iam listenig your ID...");
    console.log(req.params);
    console.log(req.params.reviewID);
})

mainapp.get("*",(req,res)=>{
    res.send(`<H1>404 NOT FOUND PAGE</H1>`)
    console.log(req.baseUrl)
})

const port = process.env.Port;

mainapp.listen(port,()=>{
    console.log(`your server is running on port.. ${port}`)
})