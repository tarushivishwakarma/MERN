const Tarushi=require('../models/userModel')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')
const login=async(req,res)=>{
    const {email,password}=req.body
    SECRET="Tarushihehe"
    if(!email || !password){
        return res.status(404).json({message:"Fill both details"})
    }
    try{
        const user=await Tarushi.findOne({email})
        const isMatch=await bcrypt.compare(req.body.password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Password mismatch"})
        }
        const token=jwt.sign({email:user.email, _id:user._id},SECRET,{expiresIn:'10m'})
        if(!email){
            res.status(404).json({message:"User not found.Kindly register"})
        }
        else if(user.role==="Management"){
            res.status(200).json({message:"Management Login successful",user,token})
        }
        else if(user.role==="Teacher"){
            res.status(200).json({message:"Teacher Login successful",user,token})
        }
        else{
            res.status(200).json({message:"Login successful",user,token})
        }
    }catch(error){
        res.status(400).json(error)
    }
}
const register=async(req,res)=>{
    try{
        const addUser=await Tarushi.create(req.body)
        res.status(201).json({message:"User added successfully"})
    }catch(error){
        res.status(400).json(error)
    }
}
const getStudent=async(req,res)=>{
    try{
        const student=await Tarushi.find({})
        res.status(201).json(student)
    }catch(error){
        res.status(400).json(error)
    }
}
const getStudentbyid=async(req,res)=>{
    try{
        const student=await Tarushi.findById(req.params.studentId)
        res.status(200).json(`$`)
    }catch(error){
        res.status(400).json(error)
    }
}
const updateStudent=async(req,res)=>{
    try{
        const student=await Tarushi.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json(student)
    }catch(error){
        res.status(400).json(error)
    }
}
const deleteStudent=async(req,res)=>{
    try{
        const student=await Tarushi.findByIdAndDelete(req.params.id)
        res.status(200).json(student)
    }catch(error){
        res.status(400).json(error)
    }
}

const uploadFiles=(upload.single("image"),async(req,res)=>{
    try{
        res.status(200).json("File uploaded")
    }catch(error){
        res.status(400).json(error)
    }
})

module.exports={login,getStudent,getStudentbyid,deleteStudent,updateStudent,register,uploadFiles}