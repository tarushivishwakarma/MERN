import React ,{useState,useRef, useContext} from 'react'
import { ThemeContext } from '../Context/Theme'

const Usereftimer = () => {
  const{toggleTheme,theme}=useContext(ThemeContext)
  const[seconds,setSeconds]=useState(0)
  const timerRef=useRef(null)
  const start=()=>{
    timerRef.current=setInterval(()=>{
      setSeconds((seconds)=>seconds+1)
      console.log("Running...")
    },1000)
  }
  const stop=()=>{
    clearInterval(timerRef.current)
  }
  const reset=()=>{
    clearInterval(timerRef.current)
    setSeconds(0)
  }
  return (
    <div style={{backgroundColor:theme==="light"?"white":"black",color:theme==="white"?"black":"white"}}>
      <button onClick={toggleTheme}>Theme</button>
      <h1>Timer :{seconds}</h1>
      <button onClick={start} className='border m-5'>Start</button>
      <button onClick={stop} className='border m-5'>Stop</button>
      <button onClick={reset} className='border m-5'>Reset</button>
    </div>
  )
}

export default Usereftimer
