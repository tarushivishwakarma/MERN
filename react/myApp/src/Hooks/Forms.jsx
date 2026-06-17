import React, { useState } from 'react'

const Forms = () => {
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[data,setData]=useState({})

    const handleClick=(e)=>{
        e.preventDefault()
        setEmail("")
        setName("")
        setPassword("")

        const data={
            name,email,password
        }
        localStorage.setItem("data",JSON.stringify(data))
    }
    const getData=()=>{
        const user=localStorage.getItem("data")
        setData(JSON.parse(user))
    }
  return (
    <div>
        <h1>Sing up</h1>
        <form action="" onSubmit={handleClick}>
            <label for="Name">Name:</label>
            <input type="text" name="" id="" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <label for="Email">Email:</label>
            <input type="email" name="" id="" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <label for="Password">Password:</label>
            <input type="password" name="" id="" placeholder="Enter password" onChange={(e)=>setPassword(e.target.vale)}/><br/><br/>
            <button type="submit">Submit</button>
            </form>
            <button>Click for details</button>
            <p>{data.name}</p>
            <p>{data.email}</p>
    </div>
  )
}

export default Forms
