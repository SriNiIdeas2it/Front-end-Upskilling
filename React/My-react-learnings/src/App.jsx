import DefaultProps from "./Components/DefaultProps"
import { Theme } from "./Components/Theme"
import PassingJSXasChildren from "./Components/PassingJSXasChildren"
import PassSpreadusingProps from './Components/PassSpreadusingProps'
import ConditionalRendering from "./Components/ConditionalRendering"
import Alert from "./Components/Alert"
import Menu from "./Components/Menu"
import UseState from "./Components/UseState"
import UseStateWithObject from "./Components/UseStateWithObject"
import Todo from "./Components/Todo/Todo"
import CounterUsingReducer from "./Components/CounterUsingReducer"
import CounterusingReducerInit from "./Components/CounterUsingReducerInit"
import ContextProvider from "./Components/Context/ContextProvider"
import ParentComp from "./Components/Context/ParentComp"
import ChildComp from "./Components/Context/ChildComp"
import UseRef from "./Components/UseRef"
import UseMemo from "./Components/UseMemo"
import Objects from "./Components/TypeScript/Objects"
 
function App() {  
const arry=["srini","karthik","neel"];
const isActive=true;
const user={name:"srini",age:20, isLoggedIn: true};
  return (
    <>
    <Objects data={user}/>
    {/* <UseMemo /> */}
    {/* <ContextProvider>
      <ParentComp />
      
    </ContextProvider>
    <UseRef/> */}
    
    {/* <CounterUsingReducer />
    <CounterusingReducerInit /> */}
    {/* <Todo /> */}
    {/* <UseStateWithObject /> */}
    {/* <UseState />
    <Menu />
    <Alert MessageType="error" />
    <h1>Hello World</h1>

    <Theme />
    <DefaultProps />
    
    <DefaultProps name={arry} />
    <PassingJSXasChildren>
      <p>1st children</p>
      <p>2st children</p>
    </PassingJSXasChildren>
    <PassSpreadusingProps  name="aravind" age="20" message="wecome back!"/>
    <ConditionalRendering IsActive={isActive} /> */}
    </>
  )
}

export default App
