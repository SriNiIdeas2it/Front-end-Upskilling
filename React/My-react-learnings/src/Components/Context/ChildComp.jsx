import { CreateCountContext } from "./CreateCountContext";
import { useContext, useState } from "react";

const ChildComp = ({PartCount=0,PartSetCount}) => {
     const{Count,SetCount}= useContext(CreateCountContext);
     const [ChildCount,SetChildCount]=useState(0);
const HandleChild=()=>{
    console.log(ChildCount+1);
  SetChildCount(prev=>prev+1);
  SetCount(prev=>prev+1);
}
  return (
    <div key="2">
      <span>Counter:{ChildCount}</span><button onClick={HandleChild}>Child Increment</button>
    </div>
  )
}

export default ChildComp
