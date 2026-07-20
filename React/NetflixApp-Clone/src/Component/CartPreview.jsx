import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Cartpreview.css'
import Header from '../Component/Header'
import { CartContext } from './CartContext'
import CartProduct from './CartProduct'
import {CartSummary} from './CartSummary'

const CartPreview = () => {
    const { cartProduct } = useContext(CartContext);
    const navigate = useNavigate();

  return (
    <div className='Cart-preview'>
    <Header />
    <div className='Cart-page'>
        <div className='cart-header'>
            <h2>Cart details</h2>
        </div>
        <div className='cart-body'>
            <div className='product-details-list'>
                {cartProduct.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : cartProduct.map((item, index) => {
                    return <CartProduct key={`${item.id}-${index}`} data={item} />
                })}                               
            </div>
            <div className='Order-summary'>
                <CartSummary />        
                <div className='div-Order-summary-button'> 
                    <button onClick={() => navigate(-1)}>back to Shopping</button>
                    <button>Proceed to Payment</button>
                </div>
                   
                
            </div>
        </div>
      
    </div>
    </div>
    
  )
}

export default CartPreview
