const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    
    },
    password:String
})

module.exports = mongoose.model("users",userSchema)



