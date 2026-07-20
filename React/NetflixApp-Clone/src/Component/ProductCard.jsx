import Product from "./Product";
import '../CSS/Home.css'
import { useRef,useEffect,useState, useContext } from "react";
import { CartContext } from "./CartContext";
const ProductCard = () => {
    debugger;
    const {products, setProducts,setCartProduct} = useContext(CartContext);
     useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
           setProducts(data);
           setCartProduct([]);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
  return (
    <div className="Main-Card">
      {products.map((item) => {
        return <Product data={item} />
      })}
    </div>
  )
}

export default ProductCard
