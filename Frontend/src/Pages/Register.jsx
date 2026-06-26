import { useState } from 'react'
import axios from 'axios'
import { toast  } from 'react-toastify'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("Student")
  const submitButton = async(e) => {
    e.preventDefault()
    if (!name || !email || !password || !role) {
      toast.error("Please fill all fields")
      return
    }
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        role
      })
      toast.success(response.data.message || "Registration successful!")
      setName("")
      setEmail("")
      setPassword("")
      setRole("Student")
    } catch(error) {
      toast.error(error)
    } 
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "50px auto" }}>
      <h1 className='text-center'>Register</h1>
      <form onSubmit={submitButton}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Role: </label>
          <select value={role} defaultValue="Student" onChange={(e) => setRole(e.target.value)} style={{ width: "100%", padding: "8px" }}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}>Register</button>
      </form>
    </div>
  )
}
export default Register