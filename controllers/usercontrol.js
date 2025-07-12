const usermodel = require("../model/usersignup")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.usersignupcontroller = async(req,res)=>{
    const {email,password,name} = req.body
    // if(!email || !name  || !password){
    //     return res.status(400).json({success:false,message:"invalid credintial"})
    // }
    const userFind = await usermodel.findOne({email})
    if (userFind){
        return res.status(400).json({success:false,message:"user already exist"})
    }
    const passecryption =await bcrypt.hash(password,10)
    const createUser = await usermodel.create({
        email,
        name,
        password:passecryption
    })
    const token = jwt.sign({email,name},process.env.SECRETKEY)
    res.status(200).json({success:true,message:"user added succesfully",token:token,user:createUser})
}


exports.userslogincontroller =async (req,res)=>{
    const {email,password} = req.body   
    const finduser = await usermodel.findOne({email})
    if (!finduser){
        return res.status(400).json({succss:false,message:"user not found"})
    }
    const passcompare = bcrypt.compare(password,finduser.password)
    if (!passcompare){
        return res.status(400).json({success:false,message:"invalid creadintials"})
    }
    const token = jwt.sign({email},process.env.SECRETKEY)
    res.status(200).json({success:true,message:"succesfull login",token:token,user:finduser})

}


















