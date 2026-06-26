import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submitButton = async(e) => {
    e.preventDefault()
    if (!email || !password ) {
      toast.error("Please fill all fields")
      return
    }
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      })
      toast.success(response.data.message || "Login successful!")
      setEmail("")
      setPassword("")
    } catch(error) {
      toast.error(error)
    } 
  }
  
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "50px auto" }}>
      <h1 className='text-center'>Login</h1>
      <form onSubmit={submitButton}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}>Login</button>
      </form>    
    </div>
  )
}
export default Login