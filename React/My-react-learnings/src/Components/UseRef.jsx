import { useRef, useState } from "react"

const UseRef = () => {
    const [Time,SetTime]=useState(0);
    const CurrentVal=useRef();
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
    </div>
  )
}

export default UseRef
