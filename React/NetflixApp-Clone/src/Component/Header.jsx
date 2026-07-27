import Netflixlogo from '../Utils/Netflix_Logo.png'
import CartLogo from '../Utils/cart-logo.png'
import '../CSS/Login.css'
import { useNavigate  } from 'react-router-dom'
import { useContext, } from 'react'
import { AuthContext } from './AuthContext'
import { CartContext } from './CartContext'
const Header = () => {  
  const {isAuthenticated,setIsAuthenticated,userDet}=useContext(AuthContext);
  const {cartProduct}=useContext(CartContext);
  const navigate=useNavigate();
    const handleSignout=()=>{
      setIsAuthenticated(false);
      localStorage.setItem("UID","");
      navigate("/login");
    }
    function handleCart(){
      navigate("/cartpreview");
    }    
    function redirectHome(){
      navigate("/browse");
    }
  return (
    <div className='cls-header'>
      <img className='netflix-logo' src={Netflixlogo} alt="logo"  onClick={redirectHome}/>  
      {isAuthenticated &&(<div className='cls-cart-section'><img src={CartLogo} onClick={handleCart}/><span>{cartProduct.length}</span> <button className='btn-signout' onClick={handleSignout}>SignOut</button></div> )}  
    </div>
  )
}

export default Header
