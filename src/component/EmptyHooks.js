import React, { useEffect, useState } from 'react'

function EmptyHooks() {
    const [x, setX]= useState(0);
    const [y, setY]= useState(0);

    const movingMouse=(e)=>{
        console.log("mouse moved")
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect Fires")
        // setX(Math.floor(Math.random()*200))
        window.addEventListener("mousemove", movingMouse)

        return ()=>{
            console.log("unmounted")  
            window.removeEventListener("mousemove", movingMouse )
        }
    },[])


  return (
    <div>
      Hooks mouse coordinates {x} & {y}
    </div>
  )
}

export default EmptyHooks
