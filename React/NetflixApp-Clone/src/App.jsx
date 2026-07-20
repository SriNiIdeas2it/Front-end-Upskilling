import Body from './Component/Body' 
import { AuthProvider } from "./Component/AuthContext"
import { CartProvider } from './Component/CartContext'
function App() {

  return (
    <>  
    <CartProvider>
    <AuthProvider>    
    <Body />    
    </AuthProvider>
    </CartProvider>
    </>
  )
}

export default App
