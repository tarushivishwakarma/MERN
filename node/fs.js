const fs=require('fs')

// // fs.readFile('sample.txt','utf-8',(err,data)=>{
// //     console.log("Data:"+data)
// // })

// fs.appendFile('sample.txt','tarushhi',(err,data)=>{
// //     console.log(data)
//  })

// fs.readFile('sample.txt','utf-8',(err,data)=>{
//     console.log("Data:"+data)
// })

// fs.rename('sample.txt','renamedfile.txt',(err)=>{
//     if(err) throw err;
//     console.log("File renamed")
// })

fs.readdir("Tarushi",(err,files)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(files)
})

fs.rmdir("Tarushi",(err)=>{
    if(err){
        console.log(err)
    }
})