//some different method's performance...
const CheckRoute = require("express").Router();


CheckRoute.post("/",(req,res)=>{
    res.send("You accessing this page via post method");
});

CheckRoute.put("/",(req,res)=>{
    res.send("You're on the put method");
});

CheckRoute.patch("/",(req,res)=>{
    res.send("This is the patch method");
});

CheckRoute.delete("/",(req,res)=>{
    res.send("you shoud create a delete function to delete");
});


module.exports = CheckRoute;
