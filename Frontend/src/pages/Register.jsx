

import { Link, useNavigate } from "react-router-dom";
import { register } from "../api";
import AuthForm from "../components/AuthForm";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      await register(formData);
      navigate("/login");
    } catch (error) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
   
       
        <AuthForm isLogin={false} onSubmit={handleRegister} />
        
      
    </div>
  );
};

export default Register;
