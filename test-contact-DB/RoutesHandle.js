//dependencies...
const Contact = require("./Contact");

//Module,,,, ScuffHolder....

const HandleRoute = {};

//Child Handling function....

HandleRoute.getRoute = (req,res)=>{
    Contact.find()
        .then(contacts=>{
            res.json({contacts});
            console.log(contacts);
        })
        .catch(e=>console.log(e));
};

HandleRoute.getSingle = (req,res)=>{
    let id = req.params.id;
    Contact.findById(id)
        .then(contact=>{
            // let index= contact.findIndex(id);
            res.json(contact);
        })
        .catch(e=>console.log("Something wrong when getting single doc"+e));
}

HandleRoute.postRoute = (req,res)=>{
    let {name,email,phone} = req.body;

    let createContact = new Contact({
        name,
        email,
        phone
    });

    createContact.save()
        .then(()=>{
            console.log(createContact);
            res.json(createContact);
        })
        .catch(e=>console.log(e))
};

HandleRoute.putRoute = (req,res)=>{
    let {name,email,phone} = req.body;
    let id = req.params.id;

    Contact.findOneAndUpdate(
        {
            _id:id
        },
        {
            $set:{
                name,
                email,
                phone
            },
        },
        {
            new:true
        }
    )
    .then(contact=>res.json(contact))
    .catch(e=>console.log(e))
}

HandleRoute.deleteRoute = (req,res)=>{
    let id = req.params.id;
    Contact.findOneAndDelete(
        {_id:id}
    )
    .then(deletedCont=>{
        if(!deletedCont){
            return res.json({Msg:"contact not found"})
        }
        res.json(deletedCont);
    })
    .catch(e=>console.log("Something is wrond to deleting"+e))
}

module.exports = HandleRoute;