import { createContext,useState} from "react"
export const CartContext=createContext();
export function CartProvider({children}){
    const [cartProduct,setCartProduct]=useState([]);
    const [products, setProducts] = useState([]);
    const [isBooked, setIsBooked] = useState(false);
    const [bookedProducts, setBookedProducts] = useState([]);

    return(
        <CartContext.Provider value={{cartProduct,setCartProduct,products,setProducts,isBooked,setIsBooked,bookedProducts,setBookedProducts }}>
            {children}
        </CartContext.Provider>
    )
}