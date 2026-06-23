const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Students",studentSchema) 