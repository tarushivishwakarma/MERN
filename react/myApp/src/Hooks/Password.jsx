import React,{useState} from 'react'

const Password = () => {
    const[showPassword,setShowPassword]=useState(false)
    const[inputPassword,setInputPassword]=useState("")

    const[liked,setLiked]=useState(false)
    const likes=()=>{
        setLiked(!liked)
    }
  return (
    <div>
      <input type={showPassword?"text":"password"} name="" id="" value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)}/>
      <button onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?"Hide":"Show"}</button>

      <p>Likes:{liked?1:0}</p>
      <button onDoubleClick={likes}>{liked?"Remove like":"Give like"}</button>
    </div>
  )
}

export default Password
