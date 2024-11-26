const mongoose = require("mongoose");


const Contacts = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Country:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true,
    }
})

let Contact = mongoose.model("Test-2",Contacts);
module.exports = Contact;