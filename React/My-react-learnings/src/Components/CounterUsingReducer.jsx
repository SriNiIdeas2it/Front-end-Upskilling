import { useReducer } from "react"
const initialState=0;
const reducer = (state,action)=>{
    debugger;
switch(action)
    {
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return initialState;
        default:
            return state;
    }

}
const CounterUsingReducer = () => {

    const [CurrentCount,dispatch ] = useReducer(reducer,initialState)
  return (
    <div>
        <button onClick={()=>dispatch("increment")}>Increment</button>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>  
         <br/>
         <span>{CurrentCount}</span>     
    </div>
  )
}

export default CounterUsingReducer
