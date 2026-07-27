import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Cartpreview.css'
import Header from '../Component/Header'
import { CartContext } from './CartContext'
import CartProduct from './CartProduct'
import {CartSummary} from './CartSummary'
import BookingPage from './BookingPage'

const CartPreview = () => {
    const { cartProduct } = useContext(CartContext);
    const{isBooked,setIsBooked,bookedProducts,setBookedProducts}=useContext(CartContext);
    const navigate = useNavigate();
    const groupedCartProducts = GroupedCartProducts();
    
    const handleBooking = () => {
        setIsBooked(true);
        const groupedCartProducts = GroupedCartProducts();
        setBookedProducts(prev =>[...prev, ...Object.values(groupedCartProducts).flat()]);    
    }
    function GroupedCartProducts() {
        const groupeCartProd = cartProduct.reduce((prev, curr) => {
        if(!prev[curr.id]){
            prev[curr.id] = [];
        }
        prev[curr.id].push(curr);
        return prev;
    }, {});
    return groupeCartProd;
    }
    
  return (
    <div className={`${isBooked ? 'Booking-Success' : 'Cart-preview'}`}>
    <Header />
    {isBooked ?<BookingPage />
    :<div className='Cart-page'>
        <div className='cart-header'>
            <h2>Cart details</h2>
        </div>
        <div className='cart-body'>
            <div className='product-details-list'>
                {cartProduct.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : Object.values(groupedCartProducts).map((products) => {
                    const item = products[0];
                    return <CartProduct key={`${item.id}-${products.length}`} data={item} quantity={products.length} />
                })}                               
            </div>
            <div className='Order-summary'>
                <CartSummary />        
                <div className='div-Order-summary-button'> 
                    <button onClick={() => navigate(-1)}>back to Shopping</button>
                    <button onClick={handleBooking}>Proceed to Payment</button>
                </div>
                   
                
            </div>
        </div>
      
    </div>}
    </div>
    
  )
}

export default CartPreview
