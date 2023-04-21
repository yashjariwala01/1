import React, { useState, useEffect } from 'react'

function CounterHook() {
    const [count,setCount]= useState(0)
    const [name, setName] = useState("")

    useEffect(()=>{// this will render every time the state is updated
        console.log("hello world")
        document.title = `you clicked button ${count} times`
    },[count]) 
  return (
    <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value) } />
      <button onClick={()=>setCount((prevCount)=>prevCount+1)}> you clicked {count} times</button>
    </div>
  )
}

export default CounterHook
