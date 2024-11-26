const Router = require("express").Router();
const {get_all_contact,post_new_contact,delete_contact} = require("./RouteControll")


Router.get("/",get_all_contact);
Router.post("/",post_new_contact);
Router.get("/delete/:id",delete_contact);


module.exports = Router;