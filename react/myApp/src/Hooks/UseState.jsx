import React,{useState} from 'react'
const UseState = () => {
    const[count,setCount]=useState(0)
    const[quantity,setQuantity]=useState(1)
    const inc=()=>{
        setCount((count)=>count+1)
    }
    const reset=()=>{
        setCount(0)
    }
    const dec=()=>{
        setCount((count)=>count-1)
    }
    const proQua=()=>{
        setQuantity((quantity)=>quantity+1)
    }
        const price=200
        const total=quantity*price
    
  return (
    <div>
        <button onClick={inc}>Inc</button>
        <button onClick={reset}>Reset</button>
        <button onClick={dec}>Dec</button>
        <h1>Count:{count}</h1>

        <button onClick={proQua}>Inc Quantity</button>
        <p>Quantity:{quantity}</p>
        <h1>Total price:{total}</h1>

        
    </div>
  )
}

export default UseState
