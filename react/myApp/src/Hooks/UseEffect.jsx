import React,{useEffect, useState} from 'react'
import axios from 'axios'

const UseEffect = () => {
    const[count,setCount]=useState(0)
    const[type,setType]=useState("Even")
    const[data,setData]=useState([])

    useEffect(()=>{
        if(count%2===0){                  
            setType("Even")
        }
        else{
            setType("Odd")
        }
    },[count])
    const getData=async()=>{
        try{
            const res=await fetch('https://jsonplaceholder.typicode.com/users')
            const result=await res.json()
            setData(result)
            // const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            // setData(res)
        }
        catch(error){
            console.log(error)
        }
        useEffect(()=>{
            getData()
        })
    }
    console.log(data)

  return (
    <div>
      <h1>This is an example</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Inc</button>
      <p>Count is:{count}</p>
      <p>Type:{type}</p>
      <button onClick={getData}>Fetch data:</button>

      <div>
        {
            data.map((user)=>{
                return(
                    <>
                    <ul key={user.id}>
                        <li>{user.name}</li>
                    </ul>
                    </>
                )
                
            })
        }
      </div>
    </div>
  )
}

export default UseEffect
