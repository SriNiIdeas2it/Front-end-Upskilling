import { useState } from "react"


const UseState = () => {
    const [Input,SetInput]=useState(()=>{  //this is initial function that called only intially
        console.log("initial state log");
        return "";
    });
    const onInputHandler=(e)=>{
        
    SetInput(e.target.value);
    }
  return (
    <div>
      <input type="text" onChange={onInputHandler}/>
      <div>{Input}</div>
    </div>
  )
}

export default UseState
