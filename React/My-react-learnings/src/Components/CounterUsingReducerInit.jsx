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
const init=(initialState)=>{ //in this function it accept initialstate value which is passed in second argument.
console.log("this only runs once");
let localcount=localStorage.getItem("count");
if(localcount!==null){
    console.log(localcount);
    return parseInt(localcount);
}
else{
    return initialState;
}
}
const CounterusingReducerInit = () => {

    const [CurrentCount,dispatch ] = useReducer(reducer,initialState,init)
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

export default CounterusingReducerInit
