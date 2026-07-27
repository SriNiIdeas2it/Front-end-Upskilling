import Header from "./Header"
import background from '../Utils/netflix-backround.png'
import { useContext, useRef, useState } from "react"
import validation from '../Utils/validation.js'
import {auth} from '../Utils/firebase.js'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthContext.jsx"
import {CartContext} from "./CartContext.jsx"
import { debugErrorMap } from "firebase/auth/cordova"


const Login = () => {
  const [isLogin,setIsLogin]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const {setIsAuthenticated,userDet,setUserDet,isLoading,setIsLoading}=useContext(AuthContext);
  const {cartProduct}=useContext(CartContext);
  const navigate=useNavigate();
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const toggleLogin=()=>{    
    setIsLogin(!isLogin);
  }
  const handleLoginSubmit=(e)=>{
    e.preventDefault();
    setIsLoading(true);
    const errorMsg=validation(email?.current?.value,password?.current?.value,name?.current?.value,isLogin);
    setErrorMessage(errorMsg);
    if(errorMsg){
      setIsLoading(false);
      return;
    }
    if(!isLogin){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          setIsAuthenticated(true);
          localStorage.setItem("UID",user.uid);
          setUserDet({
            uid:user.uid,
            email:user.email
          });
          console.log(userDet);
          navigate("/browse");
          setIsLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(error.message);
         setErrorMessage(error.message);
         localStorage.setItem("UID","");
          setIsAuthenticated(false);
          navigate("/login");
          setIsLoading(false);
        });
    }
    else{
      signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          setIsAuthenticated(true);
          localStorage.setItem("UID",user.uid);
          setUserDet({
            uid:user.uid,
            email:user.email
          });           
         setIsLoading(prev=> false); 
          navigate("/browse");
          
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(error.message);
          setErrorMessage(error.message);
         localStorage.setItem("UID","");
          setIsAuthenticated(false);
          navigate("/login")
          setIsLoading(false);
        });

    }
    
  }
  return (
    <>
    <Header />
    <img className="cls_background" src={background} alt="logo" />
    <form className="cls-form">
      <h1>{isLogin ?`Sign In`:`Sign Up`}</h1>
      {!isLogin &&(<input ref={name} type="text" placeholder="Enter your Name" />)}
      <input ref={email} type="text" placeholder="Enter your Email ID" />
      <input ref={password} type="password" placeholder="Enter your password" />
      <p>{errorMessage}</p>
      <button onClick={(e)=>handleLoginSubmit(e)}>{isLogin ?`Sign In`:`Sign Up`}</button>
     {isLoading && <span className="loader"></span>}
      <span className="cls-new-to-signin"  onClick={toggleLogin}>{isLogin ?`New to Netflix? Sign up Now`:`Already a user? Sign In Now`}</span>
    </form>
    </>
  )
}

export default Login
