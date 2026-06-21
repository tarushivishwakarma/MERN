const nodemailer=require('nodemailer')
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"tarushivishwakarma22@gmail.com",
        pass:"pknz wwjk sabo cxoz"
    }
})
transporter.sendMail({
    from:"tarushivishwakarma22@gmail.com",
    to:"yadavshivanshi636@gmail.com",
    subject:"This is test Email",
    text:"Hello"
},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Successful")
    }
})