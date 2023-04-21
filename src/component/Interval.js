import React, {useState } from 'react'

function Interval() {
    const [count,setCount]=useState(0);
   
    function func(){
      clearInterval(intervalVar)
  }

    const tick=()=>{
        // setCount((prevCount)=>prevCount+1);
        setCount(count+1)
        func()
    }
  
        const intervalVar= setInterval(tick,2000)
       
  

  return (
    <h1>
      {count}
    </h1>
  )
}

export default Interval
