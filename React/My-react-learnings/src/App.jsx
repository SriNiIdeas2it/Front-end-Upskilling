import DefaultProps from "./Components/DefaultProps"
import { Theme } from "./Components/Theme"
import PassingJSXasChildren from "./Components/PassingJSXasChildren"
import PassSpreadusingProps from './Components/PassSpreadusingProps'
import ConditionalRendering from "./Components/ConditionalRendering"

function App() {  
const arry=["srini","karthik","neel"];
const isActive=true;
  return (
    <>
    <h1>Hello World</h1>

    <Theme />
    <DefaultProps />
    
    <DefaultProps name={arry} />
    <PassingJSXasChildren>
      <p>1st children</p>
      <p>2st children</p>
    </PassingJSXasChildren>
    <PassSpreadusingProps  name="aravind" age="20" message="wecome back!"/>
    <ConditionalRendering IsActive={isActive} />
    </>
  )
}

export default App
