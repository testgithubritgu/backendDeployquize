const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 3000
const signup = require("./routs/userRegister")
const connectDB = require("./config/connectDB")
const Quiz = require("./routs/Quiz")
connectDB()

//for convert json or readable form data coming from frontend form
app.use(express.json())

//for getting request from all port from frontend
app.use(cors())
app.get("/",(req,res)=>{
    res.send("this is working")
})
app.use("/",signup)
app.use("/api/quiz",Quiz)
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})