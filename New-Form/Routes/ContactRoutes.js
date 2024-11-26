//dependencies....
const Route = require("express").Router();
const Contact  = require("../ContactSchema");
/**
 *   
 *   C
 *   R
 *   U
 *   D
 *   operation
 *   
 */  
Route.get("/",(req,res)=>{
    Contact.find()
        .then(contacts=>{
            res.render("index",{contacts});
        })
        .catch(e=>console.log(e));
})

Route.get("/delete/:id",(req,res)=>{
    let id = req.params.id;
    Contact.findOneAndDelete({_id:id})
                .then(()=>{
                    Contact.find()
                        .then(contacts=>{
                            res.render("index",{contacts})
                        })
                })
                .catch(e=>console.log(e));
})

Route.post("/",(req,res)=>{
    let {Name,Country,Age,Phone,Email,id} = req.body;

    if(id){
        Contact.findOneAndUpdate({_id:id},{$set:{Name,Country,Age,Phone,Email}},{new:true})
                    .then(()=>{
                        Contact.find()
                            .then(contacts=>res.render("index",{contacts}))
                            .catch(e=>console.log(e))
                    })
                    .catch(e=>console.log(e));
    }else{
        if (Name && Country && Age && Phone && Email){
            let SaveContact = Contact({
                Name,
                Country,
                Age,
                Phone, 
                Email
            })
            
            SaveContact.save()
                .then(()=>{
                    Contact.find()
                            .then(contacts => {
                                res.render("index",{contacts});
                        })
                })
                .catch(e=>console.log(e));
        }
    }
})




module.exports = Route;