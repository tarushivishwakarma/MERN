import React ,{useState}from 'react'

const Input = () => {
    const[text,setText]=useState("")
    const[show,setShow]=useState(true)
  return (
    <div>
      <h1>Real Time Input</h1>
      <input type="text" placeholder="Enter text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <h2>You typed:{text}</h2>

      <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
      {show &&(
        <p>This paragraph can be hidden</p>
      )}
    </div>
  )
}

export default Input
