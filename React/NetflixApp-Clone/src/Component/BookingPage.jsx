import Product from "./Product";
import {useContext} from "react";
import { CartContext } from "./CartContext";
const BookingPage = () => {
    const{bookedProducts,setBookedProducts}=useContext(CartContext);    
  return (
    <div>
      <h1>Thank you for your booking!</h1>
      <span>Your Order ID is: 123456</span>    
         <div className="Main-Card">
      {bookedProducts.map((item) => {
        return <Product data={item} />
      })}
    </div>       
    </div>
  )
}

export default BookingPage
