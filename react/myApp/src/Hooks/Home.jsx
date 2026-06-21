import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
      <button className='border-2 ml-2 mt-3' onClick={()=>{
        navigate('/signupform')
      }}>Signup</button>
    </div>
  )
}

export default Home
