import React,{useEffect,useRef} from 'react'

const Useref = () => {
    const inputRef=useRef(null)
    const scrollTo=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    const scroll=()=>{
        scrollTo.current.scrollIntoView({behaviour:"smooth"})
    }
  return (
    <div>
      <p>This is the example for Use Ref</p>
      <input ref={inputRef} className='ml-15' type='text' name='' id='' placeholder='Enter your name'/>
      <button onClick={Scroll} className='border-2 ml-50'>Contact</button>
      <p className=''></p>
    </div>
  )
}

export default Useref
