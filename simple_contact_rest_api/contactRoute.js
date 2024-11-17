const contacts = require("./contacts");

exports.getContacts = (req,res)=>{
    res.send(contacts.GetContact());
}

exports.createContact = (req,res)=>{
    let {name, email, phone} = req.body;
    
    console.log(req.body);

    let contact = contacts.CreateContact({
        name,
        email,
        phone
    });

    console.log(contact);
    
    res.json(contact);
}