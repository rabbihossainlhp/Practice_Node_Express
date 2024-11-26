//dependencies....
const Contact = require("./Contact");


//module-scuffholding....
const Handler = {};


//++++Geting all contacts++++++
Handler.get_all_contact = (req,res)=>{
    Contact.find()
            .then(contacts=>res.render("index",{contacts}))
            .catch(e=>console.log(e));
}

Handler.post_new_contact = (req,res)=>{
    let {
        Name,
        Country,
        Phone,
        Email
    } = req.body

    if(Name&&Country&&Phone&&Email){
        let createContact = Contact({
            Name,
            Country,
            Phone,
            Email,
        })
        console.log(req.body)
        createContact.save()
            .then(()=>{
                Contact.find()
                        .then(contacts=>{
                            return res.render("index",{contacts})
                            }
                        )
            }
                
            )
            .catch(e=>console.log(e))
    }
    else{
        console.log(`Somthing is missing__please carefully fillup every field`)
    }

}

Handler.delete_contact=(req,res)=>{
    let id = req.params.id;
    Contact.findOneAndDelete({_id:id})
            .then(()=>{
                Contact.find()
                    .then((contacts)=>{
                        return res.render("index",{contacts})
                    })
            })
            .catch(e=>console.log(e));
}
    
module.exports = Handler; 