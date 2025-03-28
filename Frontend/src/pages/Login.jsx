
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      await login(formData);
      navigate("/dashboard"); // Redirect to Dashboard if login is successful
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("User not found. Redirecting to registration...");
        navigate("/register");
      } else {
        alert("Login failed! Please check your credentials.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
     
        
        <AuthForm isLogin={true} onSubmit={handleLogin} />
        
      
    </div>
  );
};

export default Login;
