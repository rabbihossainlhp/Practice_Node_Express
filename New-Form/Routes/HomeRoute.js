
/**
 * 
 * 
 * Simply HomePage route cotroll here.....
 * 
 */
const Router = require("express").Router();

Router.get("/",(req,res)=>{
    res.render("Home");
})

Router.get("*",(req,res)=>{
    res.send("<h3>NOF</h3>")
})

module.exports = Router;