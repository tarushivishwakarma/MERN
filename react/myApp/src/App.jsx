import Tarushi from './Tarushi'
import './App.css'
import Teacher from './Teacher'
import UseState from './Hooks/UseState'
import Password from './Hooks/Password'
import Forms from './Hooks/Forms'
import UseEffect from './Hooks/UseEffect'
import Input from './Hooks/Input'
import Useref from './Hooks/Useref'
import Usereftimer from './Hooks/Usereftimer'
import Prev from './Hooks/Prev'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Hooks/Home'
import Portfolio from './Hooks/Portfolio'
import Callback from './Hooks/Callback'


function App() {
  return (
    <>
     <Tarushi/>
     <Teacher/>
     <UseState/>
     <Password/>
     <Forms/>
     <UseEffect/>
     <Input/>
     <Useref/> 
     
      <BrowserRouter>
        <Routes>
          <Route path='/prev' element={<Prev/>}/>
          <Route path='/timer' element={<Usereftimer/>}/>
          <Route path='/home' element={<Home/>}/> 
         <Route path='/portfolio' element={<Portfolio/>}/>
         <Route path='/callback' element={<Callback/>}/>
        </Routes>
     </BrowserRouter> 
     <Portfolio/>
    </>
  )
}
export default App