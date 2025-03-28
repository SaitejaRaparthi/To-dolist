

import { Link } from "react-router-dom";



const Home = () => (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg w-80 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to the To-Do App</h2>
        <ul className="flex justify-around mb-4">
          <li>
            <Link to="/login" className="text-blue-600">Login</Link>
          </li>
          <li>
            <Link to="/register" className="text-blue-600">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
  
  export default Home;
  
