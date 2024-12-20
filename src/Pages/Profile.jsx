import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Sign from "./Sign";


function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/auth/register`,
        { name, email, password, phone }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/register");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create an Account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number</label>
            <input
              type="number"
              id="phone"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? 
            <Link to={'/Sign'}
             
              className="text-green-500 cursor-pointer hover:underline"
            > Sign In</Link>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-green-500 cursor-pointer hover:underline"
            >Forgot Password?</span>
          </p>
        </div>
      </div>
      <Routes>
      <Route path="/Sign" element={<Sign/>}/>
    </Routes>
    </div>
   
  );
}

export default Profile;
