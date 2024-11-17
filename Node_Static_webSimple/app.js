//dependencies...
const http = require("http");
const {allRoute} = require("./routes");

//create server.
const server = http.createServer(allRoute);

//port.
const PORT = process.env.port || 5000;

//listen server.
server.listen(PORT,()=>{
    console.log(`Running your server on ${PORT} port....`);
});