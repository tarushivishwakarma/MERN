const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
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
userSchema.pre("save",async function(next){
    try{
        if(!this.ismodified("password")){
            return next()
        }
    }catch(error){
        console.log(error)
    }
    this.password=await bcrypt.hash(this.password,10)
    next()
})
module.exports=mongoose.model("User",userSchema) 