import React ,{useState,useRef, useEffect} from 'react'

const Prev = () => {
    const [count,setCount]=useState(0)
    const prevCount=useRef()
    console.log(prevCount)
    useEffect(()=>{
        prevCount.current=count
    },[count])
  return (
    <div>
        <h1>Store previous values</h1>    
        <p>Count:{count}</p>
        <p>Previous Count:{prevCount.current}</p>  
        <button onClick={()=>setCount((count)=>count+1)}>Increase</button>
    </div>
  )
}

export default Prev
