const express = require("express");
const app = express();
const cors  = require("cors");
require("dotenv/config")
const {default : mongoose} = require("mongoose");
app.get("/",(req,res)=>{
    return res.json("hi there")
})



const userRoute = require("./routes/auth");
app.use("/api/users",userRoute);

mongoose.connect(process.env.DB_STRING,{useNewUrlParser:true});
mongoose.connection 
.once("open",()=>console.log("Connected"))
.on("error",(error)=>{
    console.log(`ERROR:${error}`);
})
app.listen(4000, ()=> console.log("listen to port 4000")); 