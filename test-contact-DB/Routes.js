//dependencies...
const Router = require("express").Router();
const {getRoute,postRoute,putRoute,deleteRoute,getSingle} = require("./RoutesHandle");



Router.get("/",getRoute);

Router.get("/:id",getSingle);

Router.post("/",postRoute);

Router.put("/:id",putRoute);

Router.delete("/:id",deleteRoute);


module.exports = Router;