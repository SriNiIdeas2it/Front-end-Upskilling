import Button from "../../Components/Button/Button.tsx"
import Input from "../../Components/Input/Input.tsx"
import GoogleLogo from "../../Utils/Images/google-logo.png"
import "./Login.css"
import { signInWithGoogle } from "../../Services/Auth/AuthService.ts";
import { useAuth } from "../../Context/AuthContext.tsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      console.log(user);
      alert(`Welcome ${user.displayName}`);
      setIsAuthenticated(true);
      navigate("/dashboard");
    }
    catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  }
  // const handleSignIn = () => {
  // }

  return (
    <div className="login-container">
      <div className="login-form">
        <i className="fa-solid fa-users primary-color"></i>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Leave Management System</span>
        <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: '700' }}>Sign in to continue</span>
        <Input
          placeholder="Enter your email" type="input"
          label="Email" name="email" />
        <Input
          placeholder="Enter your password" type="password"
          label="Password" name="password" />
        <Button label="Sign In" type="button" className="login-btn" variant="primary" />
        <span className="small-word">Or Continue with</span>
        <div className="google-btn" onClick={handleGoogleLogin}>
          <img src={GoogleLogo} alt="Google" className="google-logo" />
          Google
        </div>
      </div>

    </div>
  )
}

export default Login
