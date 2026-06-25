const multer = require('multer')
const cloudinary=require('cloudinary').v2
const {CloudinaryStorage}=require('multer-storage-cloudinary')
const path = require('path')

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join( '/uploads/'))
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })

cloudinary.config({
    cloud_name:"dzltwme9k",
    api_key:"331381876691388",
    api_secret:"aGy39dS9PkDNcufQtyVXGlT4zg4"
})
const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"uploads",
        resource_type:"raw",
        allowed_formats:["pdf"]
    }
})
module.exports={storage}