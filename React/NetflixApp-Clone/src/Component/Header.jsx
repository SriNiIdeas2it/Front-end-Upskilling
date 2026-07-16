import Netflixlogo from '../Utils/Netflix_Logo.png'
import '../CSS/Login.css'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
const Header = () => {
  const {isAuthenticated,setIsAuthenticated,userDet}=useContext(AuthContext);
    const handleSignout=()=>{
      console.log(userDet);
      setIsAuthenticated(false);
      Navigate("/login");
    }
    console.log(Netflixlogo);
  return (
    <div className='cls-header'>
      <img className='netflix-logo' src={Netflixlogo} alt="logo" />  
      {isAuthenticated &&( <button className='btn-signout' onClick={handleSignout}>SignOut</button> )}  
      
    </div>
  )
}

export default Header
