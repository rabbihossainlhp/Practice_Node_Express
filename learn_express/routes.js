const router = require("express").Router();



router.get("/about",(req,res)=>{
    res.send(`<H1>Welcome to about page via router.....</H1>`)
})

router.get("/help",(req,res)=>{
    res.send(`<h1>This  is the new help/support page via router</h1>`)
})

router.get("/setting",(req,res)=>{
    res.send(`<h2>Okey you're reached on the setting page via router</h2>`)
})



module.exports = router;
    