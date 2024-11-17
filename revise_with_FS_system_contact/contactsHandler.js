//dependencies.....
const fs = require("fs");



//module.scuffholder....
const ContactsHandler = {};


//blank array for storing in fs_db...
let contacts =[];


fs.readFile("./FS_DB/DB.json",(err,buffer)=>{
    if(!err){
        contacts = JSON.parse(buffer);
    }else{
        contacts = [];
    }
})



//get all contacts object...
// ContactsHandler.getContacts = (req,res)=>{
    
// }

ContactsHandler.createContact = (req,res)=>{
    let {name,phone,email} = req.body;
    let newContacts = {
        name,
        phone,
        email
    }
    newContacts.id = contacts.length+1;
    contacts.push(newContacts);
    let stringifyappend = JSON.stringify(contacts,null,2);
//_____________________________________________________________________
//_____________________________________________________________________

    fs.writeFile("./FS_DB/DB.json",stringifyappend,(err)=>{
        if(!err){
            res.status(201).json({ message: "Contact created successfully" });
        }
        else{
            res.status(500).json({ error: "There was an srerver issue..." });

        }
    })

}



ContactsHandler.updateContact = (req,res)=>{

    fs.readFile("./FS_DB/DB.json",(err,data)=>{
        if(!err){
            let Data = data.toString();
            let convertInJson = JSON.parse(Data);

            let id = req.params.id;
            let id2 = parseInt(id);

            let contactIndex = convertInJson.findIndex(count => id2 === count.id);

            convertInJson[contactIndex].name = req.body.name || convertInJson[contactIndex].name;
            convertInJson[contactIndex].phone = req.body.phone || convertInJson[contactIndex].phone;
            convertInJson[contactIndex].email = req.body.email || convertInJson[contactIndex].email;

            let stringifyappend = JSON.stringify(convertInJson, null ,2);

            //write this info....
            fs.writeFile("./FS_DB/DB.json",stringifyappend,(err)=>{
                if(!err){
                    res.json({Msg:"updated"});
                    // console.log(stringifyappend);
                }else{
                    console.log("Something wrong when trying to update...");
                }
            })
            
          
        }else{
            console.log("something wrong in serveer...");
        }
    })

    res.json({Msg:"update your data"})
}

ContactsHandler.deleteContact = (req,res)=>{
    fs.readFile("./FS_DB/DB.json",(err,buffer)=>{
        if(!err){
            let data = buffer.toString();
            let convertInJson = JSON.parse(data);

            let id = req.params.id;
            let id2 = parseInt(id);

            let newContacts = convertInJson.filter(count=>count.id !== id2);


            fs.writeFile("./FS_DB/DB.json",JSON.stringify(newContacts),(err)=>{
                if(!err){
                    res.json({Msg:"Deleted"});
                }else{
                    console.log("something wrong can't perform Delete ");
                }
            })
            console.log(newContacts)

            

        }
    })
}

//Exporting object...
module.exports = ContactsHandler;