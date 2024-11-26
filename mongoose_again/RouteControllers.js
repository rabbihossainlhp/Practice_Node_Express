const Contact = require("./ContactSchema");

//module scuffholder
const Handler = {};

//_____________POST
Handler.postContact = (req,res)=>{
    let {
        name,
        Country,
        State,
        Phone
        } = req.body;

    let createPost = Contact({name,Country,State,Phone});
    createPost.save()
            .then((saveOne)=>{
                res.json(saveOne);
            })
            .catch(e=>res.json(e));
}

//____________Get_all
Handler.get_allContact = (req,res)=>{
    Contact.find()
            .then(allContact=>res.json(allContact))
            .catch(e=>res.json(e))
}

//___________get_singleContact
Handler.get_singleContact = (req,res)=>{
    var id = req.params.id;
    Contact.findById(id)
            .then(singleCont=>res.json(singleCont))
            .catch(e=>res.json(e))
}

//____________updateContact 
Handler.updateContact = (req,res)=>{
    let {name,Country,State,Phone} = req.body;
    let id = req.params.id;
    Contact.findOneAndUpdate({_id:id},{$set:{name,Country,State,Phone}},{new:true})
                .then(updatedCont=>res.json(updatedCont))
                .catch(e=>res.json(e))
}

//____________deleteContact
Handler.deleteContact = (req,res)=>{
    let id = req.params.id;
    Contact.findOneAndDelete(id)
                .then(deletedCont=>res.json(deletedCont))
                .catch(e=>res.json(e))
}

module.exports = Handler;