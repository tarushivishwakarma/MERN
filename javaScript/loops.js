// let sum=0
// for(let i=1;i<=100;i++)
//     sum+=i
// console.log(sum)


// let factorial=1
// for(let i=20;i>=1;i--)
//     factorial*=i
// console.log(factorial)


// for(let i=1;i<=85;i++){
//      if(i%2==0)
//          console.log(i)
//      else 
//          console.log(i)
//  }


let prime =0
for(let i=1;i<=30;i++){
    let count = 0
    for(let j=1;j<=i;j++){
        if(i%j===0)
            count++
    }
    if(count===2){
          console.log(i)
        prime++
    }
}
console.log(prime)


// let prime =0
// for(let i=1;i<=30;i++){
// let count =0
//     for(let j=1;j<=i/2;j++){
//         if(i%j===0)
//             count++
//     }
//     if(count===1){
//           console.log(i)
//         prime++
//     }  
// }
// console.log(prime)


// let i=30
// while(i>=1){
//     console.log(i)
//     i--
// }


// let i=1
// let sum=0
// while(i<=30){
//     sum+=i
//     i++
// }
// console.log(sum)


let i=3011
let count=0
while(i>0){
    count++
    i=i/10
}
console.log(count)