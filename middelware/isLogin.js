exports.isLoggin = (req,res)=>{
    const {token} = req.body;
    if (!token){
        return res.status(404).json({success:false,message:"user not logged yet"})
    }
    next()
    
}