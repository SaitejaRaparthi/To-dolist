

import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ isLogin, onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}
      className="bg-white shadow-lg p-8 rounded-lg w-[90%] sm:w-[400px] mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">{isLogin ? "Login" : "Register"}</h2>

      {/* Conditional rendering for name input */}
      {!isLogin && (
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-700">Name</label>
          <input
            id="name"
            className="mt-1 p-3 border border-gray-300 rounded w-full"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
      )}

      {/* Email input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
        <input
          id="email"
          className="mt-1 p-3 border border-gray-300 rounded w-full"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      {/* Password input */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
        <input
          id="password"
          className="mt-1 p-3 border border-gray-300 rounded w-full"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="mb-4">
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </div>

      {/* Link to switch between login/register */}
      <div className="text-center">
        {isLogin ? (
          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:text-blue-700">
              Register here
            </Link>
          </span>
        ) : (
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-700">
              Login here
            </Link>
          </span>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
