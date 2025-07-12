const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 3000
const signup = require("./routs/userRegister")
const connectDB = require("./config/connectDB")
connectDB()

//for convert json or readable form data coming from frontend form
app.use(express.json())

//for getting request from all port from frontend
app.use(cors())

app.use("/",signup)
 
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})