import CartProduct from "./CartProduct";
import {useContext} from "react";
import { CartContext } from "./CartContext";
import "../CSS/Booking.css";
import TickLogo from "../Utils/tick-icon.svg";
import { useNavigate } from "react-router-dom";
const BookingPage = () => {
    const{bookedProducts,setBookedProducts}=useContext(CartContext);    
    const navigate = useNavigate();
  return (
    <div className="BookingPage">
      <img src={TickLogo} alt="Tick Logo"   />
      <h1>Thank you for your booking!</h1>
      <span>Your Order ID is: <strong>{ Math.floor(10000 + Math.random() * 90000)}</strong></span>   
      <span>Total Booked Amount: <strong>${bookedProducts.reduce((total, item) => total + item.price, 0).toFixed(2)}</strong></span>
      <button onClick={()=>  navigate("/browse")}>Back to Shopping</button>
         {/* <div className="Main-Card">
      {bookedProducts.map((item) => {        
        return <CartProduct key={`${item.id}-${bookedProducts.length}`} data={item} quantity={bookedProducts.length} />

      })}
    </div>        */}
    </div>
  )
}

export default BookingPage
