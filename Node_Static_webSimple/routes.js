//Write the route controller for all route here...
//dependencies..
const http = require("http");

//module-scuffholder..
const HandleRoute = {};



//multiple route...
HandleRoute.allRoute = (req,res)=>{
    if(req.url === "/" || req.url === "/home"){
        homeRoute(req,res);
    }else if(req.url === "/about"){
        aboutRoute(req,res);
    }else if(req.url === "/help"){
        helpRoute(req,res);
    }else if(req.url === "/setting"){
        settingRoute(req,res);  
    }else{
        res.writeHead(404,{Msg:"Not found page"});
        res.write("<H3>404 Not Found The Targeted Page</H3>");
        res.write("<p>Please use the correct route for reach your expectation..</p>");
        res.end();
    }
}

//Home page.
const homeRoute = (req,res)=>{
        res.writeHead(200,{Msg:"connection ok"});
        res.write(`<h1>You're on the Home page..</h1>`);
        res.end();
}


//about page.
const aboutRoute = (req,res)=>{
        res.writeHead(200,{Msg:"connection ok"});
        res.write(`<h1>You're on the About page..</h1>`);
        res.end();
}


//contact page.
const helpRoute = (req,res)=>{
        res.writeHead(200,{Msg:"connection ok"});
        res.write(`<h1>You're on the Contact page..</h1>`);
        res.end();
}

//setting page.
const settingRoute = (req,res)=>{
        res.writeHead(200,{Msg:"connection ok"});
        res.write(`<h1>You're on the Setting page..</h1>`);
        res.end();
}



//export the object..
module.exports = HandleRoute;