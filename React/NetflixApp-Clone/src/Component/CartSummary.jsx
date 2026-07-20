import {useState,useContext} from 'react';
import {CartContext} from '../Component/CartContext';
export const CartSummary = () => {
    const {cartProduct} = useContext(CartContext);   
    let TotalAmount = 0;
    cartProduct.forEach((item) => {
        TotalAmount += item.price
    });    
    return (
    <>
        <h3>Order Summarry</h3>
            <div>
                <span>Sub Total ({cartProduct.length} item) :</span>
                <span>${TotalAmount.toFixed(2)}</span>
            </div>
            <div>
                <span>Total Amount :</span>
                <span>${TotalAmount.toFixed(2)}</span>
            </div> 
    </>
    )
}