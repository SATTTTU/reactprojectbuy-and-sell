import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/grocimart-logo.png";
import Cart from "../Pages/Cart";
import Home from "./Home";
import { CartContext } from "./CartContext";
import Shop from "./Shop";
import Profile from "../Pages/Profile";
import Wishlist from "../Pages/Wishlist";
import Category from "../Pages/Category";
import Checkout from "../Pages/CheckOut";
import TrackingData from "../Pages/TrackingData";
import Sign from "../Pages/Sign";
import { useAuth } from "../Context/Auth.jsx";
import { toast } from "react-toastify";
import UserDashboard from "../User/UserDashboard.jsx";
import Protected from "./Routes/Protected.jsx";

function Header() {
  const [auth, setAuth] = useAuth();
  const { state } = useContext(CartContext);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Sample keywords for suggestions
  const keywords = [
    "Apple",
    "Banana",
    "Cherry",
    "Laptop",
    "Football",
    "Grocery",
    "Shirts",
    "Dresses",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setStickyClass("sticky top-0 bg-white shadow-md");
      } else {
        setStickyClass("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchInput) {
      const filteredSuggestions = keywords.filter((keyword) =>
        keyword.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchInput]);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
    if (currencyDropdownOpen) setCurrencyDropdownOpen(false);
  };

  const toggleCurrencyDropdown = () => {
    setCurrencyDropdownOpen(!currencyDropdownOpen);
    if (languageDropdownOpen) setLanguageDropdownOpen(false);
  };

  const handleLogout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
  };

  return (
    <>
      <header>
        <section className="first-header border-b">
          <div className="container mx-auto">
            <div className="bg-green-600 p-2 text-center text-xs text-white">
              Due to the <strong>COVID 19</strong> epidemic, orders may be
              processed with a slight delay.
            </div>
            <div className="flex justify-between items-center py-2">
              <nav className="flex gap-4 text-xs">
                <Link to="/about-us" className="hover:text-gray-700">
                  About Us
                </Link>
                <Link to="/Profile" className="hover:text-gray-700">
                  My Account
                </Link>
                <Link to="/TrackingData" className="hover:text-gray-700">
                  Order Tracking
                </Link>
                <Link to="/Wishlist" className="hover:text-gray-700">
                  Wishlist
                </Link>
              </nav>
              <div className="flex gap-4 items-center text-xs">
                <p>
                  100% Secure delivery without contacting the courier. Need help?
                  <span className="text-red-500"> +1245 5489</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`py-3 ${stickyClass}`}>
          <div className="container mx-auto flex items-center justify-between">
            <img
              className="w-1/4 md:w-1/6"
              src={logo}
              alt="logo"
            />
            <form className="relative w-1/2">
              <input
                className="w-full px-4 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                placeholder="Search for products..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {suggestions.length > 0 && (
                <div className="absolute w-full bg-white shadow-lg mt-1 z-50">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => {
                        setSearchInput(suggestion);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </form>
            <div className="flex items-center gap-4">
              <div className="relative">
                {auth.user ? (
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                  >
                    <i className="fa-solid fa-user bg-green-600 text-white p-2 rounded text-xl" />
                    <span className="text-gray-700">Hi, {auth.user.name}</span>
                  </div>
                ) : (
                  <Link to="/Sign">
                    <i className="fa-solid fa-user bg-green-600 text-white p-2 rounded text-xl" />
                    <span className="ml-2 text-gray-700">Login</span>
                  </Link>
                )}
                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
                    onClick={() => setDropdownOpen(false)} // Close dropdown when clicking inside
                  >
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/Profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setDropdownOpen(false)} // Close dropdown on link click
                        >
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleLogout();
                            setDropdownOpen(false);
                        toast.success("Logout Successfully.")     // Close dropdown after logout
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link to="/Cart" className="relative">
                <i className="fa-solid fa-cart-shopping text-xl text-pink-500" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  {state.cartItems ? state.cartItems.length : 0}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<><Home /><Shop /></>} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Category/:cid/" element={<Category />} />
        <Route path="/CheckOut" element={<Checkout />} />
        <Route path="/TrackingData" element={<TrackingData />} />
        <Route path="/UserDashboard" element={<Protected/>}>
        <Route path="" element={<UserDashboard />} />
        </Route>
        <Route path="/Sign" element={<Sign />} />
      </Routes>
    </>
  );
}

export default Header;
