const Project=require('../models/projectSchema')
const addProject=async(req,res)=>{
    try{
        const project=await Project.create(req.body)
        res.status(201).json({message:"Added project"})
    }catch(error){
        res.status(400).json(error)
    }
}
const approveProject=async(req,res)=>{
    try{
        const project=await Project.findById(req.params.id)
        project.status="Approved"
        await project.save()
        res.status(201).json({message:"Approved project"})
    }catch(error){
        res.status(400).json(error)
    }
}
const rejectProject=async(req,res)=>{
    try{
        const project=await Project.findById(req.params.id)
        project.status="Rejected"
        await project.save()
        res.status(201).json({message:"Rejected project"})
    }catch(error){
        res.status(400).json(error)
    }
}

module.exports={addProject,approveProject,rejectProject}