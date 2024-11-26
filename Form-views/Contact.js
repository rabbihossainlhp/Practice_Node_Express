const {Schema,model} = require("mongoose");

const Contacts = new Schema({
    Name:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
})

let Contact = model("Form-Info",Contacts);
module.exports = Contact;