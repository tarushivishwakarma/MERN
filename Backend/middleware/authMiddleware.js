const verifyToken=(req,res,next)=>{
    const token=req.headers.token
    if(!token){
        return res.status(401).json("Unauthorised")
    }
    if(token!=="12345"){
        return res.status(304).json("Wrong credentials")
    }
    next()
}
module.exports={verifyToken}