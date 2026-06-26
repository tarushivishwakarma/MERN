import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div>
      {page === 'home' && <Home navigate={setPage} />}
      {page === 'login' && <Login />}
      {page === 'register' && <Register />}
      <ToastContainer />
    </div>
  )
}

export default App
