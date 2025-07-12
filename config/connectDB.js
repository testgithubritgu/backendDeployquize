const mongoose= require("mongoose")

const connectDB = async()=>{
   try {
    await mongoose.connect(`${process.env.CONNECTDB}/quizApp`)
    console.log("connected databas atlas to server");
   } catch (error) {
        console.log("error in connection database",error)
   }
    
}

module.exports =connectDB;