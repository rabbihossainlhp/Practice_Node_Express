//dependencies...
const {Schema,model} = require("mongoose");

const ContactSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        maxlength:30,
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        minlength:9,
        maxlength:15,
    }
})

const Contact = model("Contact",ContactSchema);

module.exports = Contact;