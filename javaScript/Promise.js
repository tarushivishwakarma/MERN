// const p1=Promise.resolve().then(()=>console.log("A"))
// const p2=Promise.resolve().then(()=>console.log("B"))
// const p3=Promise.resolve().then(()=>console.log("C"))

// Promise.allSettled([p1,p2,p3]).then((data)=>console.log(data)).catch((err)=>console.log(object))

// function one(){
//     two()
// }
// function two(){
//     three()
// }
// function three(){
//     console.log("Hello")
// }
// one()

// setTimeout(()=>{
//     console.log("Macro1")
// },0)
// console.log("Start")
// Promise.resolve().then(()=>console.log("Micro"))
// setTimeout(()=>{
//     console.log("Macro")
// },0)
// console.log("Stop")
// Promise.resolve().then(()=>console.log("Micro1"))

import mul from './Imports.js'
