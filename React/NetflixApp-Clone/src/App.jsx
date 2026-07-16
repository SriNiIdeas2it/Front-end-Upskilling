import Body from './Component/Body' 
import { AuthProvider } from "./Component/AuthContext"
function App() {

  return (
    <>  
    <AuthProvider>
    <Body />
    </AuthProvider>
    </>
  )
}

export default App
