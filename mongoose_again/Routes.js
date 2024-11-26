const Router = require("express").Router();
const {postContact,get_allContact,get_singleContact,updateContact,deleteContact} = require("./RouteControllers");

Router.get("/",get_allContact);

Router.get("/:id",get_singleContact);

Router.post("/",postContact);

Router.put("/:id",updateContact);

Router.delete("/:id",deleteContact);  


module.exports = Router;