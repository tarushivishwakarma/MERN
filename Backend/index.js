const express=require('express')
const mongoose=require('mongoose')
const Tarushi=require('./userModel')
const app=express()
app.use(express.json())

// const fs=require('fs')
// const url=require('url')
// const {verifyToken}=require('./authMiddleware')

// app.get("/work",(req,res)=>{
//     fs.readFile('backend.txt','utf-8',(err,data)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(data)
//         }
//     })
// })
// app.get("/student/:id",(req,res)=>{
//     res.send(`Student Id:${req.params.id}`)
// })
// app.get("/",(req,res)=>{
//     res.send("Home")
// })
// app.get("/about",(req,res)=>{
//     res.send("About")
// })
// app.get("/contact",(req,res)=>{
//     res.send("Contact")
// })

// app.get("/profile",verifyToken,(req,res)=>{
//     try{
//         const data="Bank details"
//         res.status(200).json(data)
//     }catch(error){
//         res.status(400).json(error)
//     }
// })

mongoose.connect('mongodb://localhost:27017')
.then(()=>console.log("DB connected"))
.catch((err)=>console.log(err))

app.post("/addStudent",async(req,res)=>{
    try{
        const student=await Tarushi.create(req.body)
        res.status(201).json(student)
    }catch(error){
        res.status(400).json(error)
    }
})

app.get("/getStudents",async(req,res)=>{
    try{
        const student=await Tarushi.find({})
        res.status(201).json(student)
    }catch(error){
        res.status(400).json(error)
    }
})

app.get("/getStudent/:studentId",async(req,res)=>{
    try{
        const student=await Tarushi.findById(req.params.studentId)
        res.status(201).json(student)
    }catch(error){
        res.status(400).json(error)
    }
})

app.put("/student/:id",async(req,res)=>{
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

})

app.delete("/deleteStudent",async(req,res)=>{
    try{
        const student=await Tarushi.findByIdAndDelete(req.params.id)
        res.status(200).json(student)
    }catch(error){
        res.status(400).json(error)
    }
})

app.listen(2211,()=>{
    console.log("Server started")
})