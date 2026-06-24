const mongoose=require('mongoose')
const projectSchema=new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    projects:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Approved","Rejected","Pending"],
        default:"Pending"
    }
},{timestamps:true})

module.exports=mongoose.model('Project',projectSchema)