import React, { useCallback,useState} from 'react'
import CallbackChild from './CallbackChild'

const Callback = () => {
    const [count,setCount]=useState(0)
    const handleclick=useCallback(()=>{
        setCount((count)=>count+1)
        console.log("Parent")
    },[])
        
  return (
    <div>
      <CallbackChild handle={handleclick} count={count}/>
    </div>
  )
}

export default Callback
