import React from 'react'

const CallbackChild = ({handle,count}) => {
  return (
    <div>
      <h1>hello</h1>
      <p>{count}</p>
      <button onClick={handle}>clickme</button>
    </div>
  )
}

export default CallbackChild
