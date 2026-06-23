const express=require('express')
const fs=require('fs')
const url=require('url')
const mongoose=require('mongoose')
const Tarushi=require('./models/userModel')
const app=express()
app.use(express.json())
const {verifyToken}=require('./middleware/authMiddleware')
const routes=require('./routes/userRoutes')
app.get("/work",(req,res)=>{
    fs.readFile('backend.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})
app.get("/student/:id",(req,res)=>{
    res.send(`Student Id:${req.params.id}`)
})
app.get("/",(req,res)=>{
    res.send("Home")
})
app.get("/about",(req,res)=>{
    res.send("About")
})
app.get("/contact",(req,res)=>{
    res.send("Contact")
})
app.get("/profile",verifyToken,(req,res)=>{
    try{
        const data="Bank details"
        res.status(200).json(data)
    }catch(error){
        res.status(400).json(error)
    }
})
mongoose.connect('mongodb://localhost:27017')
.then(()=>console.log("DB connected"))
.catch((err)=>console.log(err))
app.use("/api",routes)
app.listen(2211,()=>{
    console.log("Server started")
})