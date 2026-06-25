const jwt= require('jsonwebtoken')
SECRET="Tarushihehe"
const verifyToken=(req,res,next)=>{
    const authheader=req.headers.authorization || req.headers.authorization
    if(!authheader){
        return res.status(401).json({message:"Unauthorised"})
    }
    const token=authheader.split(" ")[1]
    try{
        const payload=jwt.verify(token,SECRET)
        req.user=payload
        next()
    }catch(error){
        return res.status(401).json({message:"Invalid token"})
    }
}
module.exports={verifyToken}