import { createContext,useState} from "react"
export const CartContext=createContext();
export function CartProvider({children}){
    const [cartProduct,setCartProduct]=useState([]);
    const [products, setProducts] = useState([]);

    return(
        <CartContext.Provider value={{cartProduct,setCartProduct,products,setProducts}}>
            {children}
        </CartContext.Provider>
    )
}