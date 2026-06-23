const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Student","Teacher","Management"],
        default:"Student",
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model("Students",studentSchema) 