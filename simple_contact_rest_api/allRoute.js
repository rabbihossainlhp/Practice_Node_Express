const route = require("express").Router();
const {
    getContacts,
    createContact,
} = require("./contactRoute");

route.get("/",getContacts); 
// route.get("/:id");
route.post("/",createContact);
// route.put("/:id");
// route.delete("/:id");



module.exports = route;