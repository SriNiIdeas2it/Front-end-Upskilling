import ChildComp from "./ChildComp";
import { CreateCountContext } from "./CreateCountContext"
import { useContext } from "react";


const ParentComp = () => {
   const{Count,SetCount}= useContext(CreateCountContext);
  return (
    <>
    <div style={{border:"1px solid red"}}>
          <ChildComp />
      <span>Counter:{Count}</span><button onClick={()=>SetCount(prev=>prev+1)}>Parent Increment</button>
     
    </div>
   
    </>
    
  )
}

export default ParentComp
