import { useContext } from 'react'
import { CartContext } from './CartContext'
const CartProduct = ({data,quantity}) => {
  const { cartProduct, setCartProduct } = useContext(CartContext);
  if (!data) return null;

  function handleRemove(id){
    const filteredCart = cartProduct.filter(item => item.id !== id);
    setCartProduct(filteredCart);
  }

  return (
    <div className='cls-each-product'>
      <div className='div-product-image'><img src={data.images?.[0]} alt={data.title} /></div>
      <div className='div-center-product'>
        <div className='product-title'>{data.title}</div>
        <div className="product-disc">{data.description}</div>
        <div className='div-product-buttons'>
          <span>{quantity}</span><button>+</button><button>-</button><button onClick={()=>handleRemove(data.id)}>Remove</button></div>
      </div>
      <div className='div-price'>${data.price * quantity}</div>
    </div>
  )
}

export default CartProduct
