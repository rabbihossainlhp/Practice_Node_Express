//dependencies...
const router = require("express").Router();
const {createContact,updateContact,deleteContact} = require('./contactsHandler')


//controller...
//get
router.get("/",(req,res)=>{
    res.send(`<h1>add the controller to get the contacts......</h1>`)
});

//post
router.post("/",createContact);

//put
router.put("/:id",updateContact);

//delete
router.delete("/:id",deleteContact);

module.exports = router;