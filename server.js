const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 3000
const signup = require("./routs/userRegister")
const connectDB = require("./config/connectDB")
const Quize = require("./routs/Quize")
connectDB()

//for convert json or readable form data coming from frontend form
app.use(express.json())

//for getting request from all port from frontend
app.use(cors())
app.get("/hey",(req,res)=>{
    res.json({message:"this is working"})
})
app.use("/",signup)
app.use("/api/quiz",Quize)
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})