/// This is our second time test database checking with mongoose....
//dependencies....
const express = require("express");
const mongoose = require("mongoose");



//main application from here....
const app = express();
/**
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 *///______________________________________/
//__________Some route decleare here with simple controlls-------& some redy variable for posting data in db____________________
let Schema =  mongoose.Schema({
    name:String,
})
let secondTest = mongoose.model("Secont-Test",Schema);

app.get("/",(req,res)=>{
    let test = new secondTest({name:"Hayat-Mahmud"});
    test.save()
            .then((data)=>{
                res.json(data);
            })
            .catch((error)=>{
                console.log(error);
                res.json(error);
            })
    

})

/**_____________________________________\
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 */



//local server port....
const port = 7000;

//________Some importent link and passs extract here....
let dbPass = encodeURIComponent("123ASDasd@&");
let dbUrl = `mongodb+srv://hayat:${dbPass}@cluster0.ardgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


//listening port here________ with connecting DB in back.....
//________we will try connect DB here because we want to active our port after connecting database ......
mongoose.connect(dbUrl)
                    .then(()=>{
                        app.listen(port,()=>{
                            console.log("Your server running on port____ "+port);
                        });
                    })
                    .catch((e)=>{
                        console.log("Someting wrong to connecting database...."+e);
                    });

