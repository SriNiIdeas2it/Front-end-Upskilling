import { useRef, useState } from "react"

const UseRef = () => {
    const [Time,SetTime]=useState(0);
    const CurrentVal=useRef();
    const FocusRef=useRef(null);
    function handleStart(){
       CurrentVal.current= setInterval(()=>
            {
                SetTime(prev=>prev+1);
            },1000)
        }
    function handleStop(){
  clearInterval(CurrentVal.current);
    }
  return (
    <div>
      Time:{Time}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <input  ref={FocusRef}  type="text" placeholder="user name:" />
      <button onClick={()=>FocusRef.current.focus()}>focus input</button>
    </div>
  )
}

export default UseRef
