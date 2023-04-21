import React, {useReducer} from 'react'

const intialState =0;
const reducer=(state,action)=>{
    switch(action){
        case "increment":
            return (state+1);
        case "decrement":
            return (state-1);
        case "reset":
            return intialState;
        default:
            return state;
    }
}

function UseReduce() {
    const [count, dispatch] = useReducer(reducer,intialState)
  return (
    <div>
      <h1>count -{count}</h1>
      <button onClick={()=> dispatch("increment")}>Increment</button>
      <button onClick={()=> dispatch("decrement")}>Decrement</button>
      <button onClick={()=> dispatch("reset")}>Reset</button>
    </div>
  )
}

export default UseReduce
