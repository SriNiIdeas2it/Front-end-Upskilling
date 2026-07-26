import '../CSS/Home.css'
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({data}) => {
    const [itemCount, setItemCount] = useState(0);
    const { cartProduct, setCartProduct, products, setIsBooked } = useContext(CartContext);

    function handleAddItem(productid) {
        setIsBooked(false);
        setItemCount(prev => prev + 1);
        const selectedProduct = products.find(item => item.id === productid);
        if (selectedProduct) {
            setCartProduct(prev => [...prev, selectedProduct]);
        }
    }

    function handleRemoveItem(productid) {
         setIsBooked(false);
        if (itemCount > 0) {
            setItemCount(prev => prev - 1);
        }

        setCartProduct(prev => {
            const newCartArray = [...prev];
            const index = newCartArray.findLastIndex(item => item.id === productid);
            if (index !== -1) {
                newCartArray.splice(index, 1);
            }
            return newCartArray;
        });
    }
    console.log("added:",cartProduct);
    return (
        <div key={`product_id_${data.id}`} className="product-card" >
            <img src={data.images[0]} loading="lazy" alt={data.title} />
            <span className='cls-product-title'>{data.title}</span>
            <div className="cls-product" >
                <span className='cls-price'>Price: ${data.price}</span>
                <div>
                    <span className='cls-selectedCount'>{itemCount}</span>
                    <button onClick={() => handleAddItem(data.id)}>+</button>
                    <button onClick={() => handleRemoveItem(data.id)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Product
