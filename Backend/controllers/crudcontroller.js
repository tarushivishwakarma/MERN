const Tarushi=require('../models/userModel')
const login=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(404).json("Fill all details")
    }
    try{
        const user=await Tarushi.findOne({email})
        if(user){
            res.status(200).json("Login successful")
        }else{
            res.status(404).json("User not found.Kindly register")
        }
    }catch(error){
        res.status(400).json(error)
    }
}
const addStudent=async(req,res)=>{
    try{
        const student=await Tarushi.create(req.body)
        res.status(201).json(student)
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
        res.status(200).json(student)
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
module.exports={login,getStudent,getStudentbyid,deleteStudent,updateStudent,addStudent}