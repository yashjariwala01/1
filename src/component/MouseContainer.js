import React, { useState } from 'react'
import EmptyHooks from './EmptyHooks'

function MouseContainer() {
    const [display ,setDisplay]= useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>toggle mouse</button>
    {display && <EmptyHooks/>}
    </div>
  )
}

export default MouseContainer
