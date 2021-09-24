require("./db/connection")
const express = require("express");
const app = express();
console.log(express);

const routeFinder = require("./routes")
app.use(express.json());
app.use(routeFinder);



app.listen(3000,()=>{
    console.log("Listening on port 3000");
});
