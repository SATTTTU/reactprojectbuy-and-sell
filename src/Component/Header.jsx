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

function Header() {
  const { state, dispatch } = useContext(CartContext);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Sample keywords for suggestions
  const keywords = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grapes", "Honeydew", "laptop", "football", "volleyball", "grocery", "shirts", "pants", "special", "dresses"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setStickyClass("sticky top-0 bg-white shadow-md");
      } else {
        setStickyClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (searchInput) {
      const filteredSuggestions = keywords.filter(keyword =>
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

  const handleLanguageSelect = (language) => {
    console.log(`Selected language: ${language}`);
    setLanguageDropdownOpen(false);
  };

  const handleCurrencySelect = (currency) => {
    console.log(`Selected currency: ${currency}`);
    setCurrencyDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      <header>
        <section className="first-header border">
          <div className="container mx-auto">
            <div className="bg-green-600 p-2">
              <p className="text-xs text-white text-center">
                Due to the <strong>COVID 19</strong> epidemic, orders may be processed with a slight delay
              </p>
            </div>
            <div className="flex flex-wrap justify-between items-center py-2">
              <nav className="w-full lg:w-auto">
                <ul className="flex flex-wrap gap-4 justify-center lg:justify-start text-xs">
                  <li>
                    <Link to="/about-us" className="hover:text-gray-700">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Profile" className="hover:text-gray-700">My Account</Link>
                  </li>
                  <li>
                    <Link to="/TrackingData" className="hover:text-gray-700">Order Tracking</Link>
                  </li>
                  <li>
                    <Link to="/Wishlist" className="hover:text-gray-700">Wishlist</Link>
                  </li>
                </ul>
              </nav>
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3 w-full lg:w-auto mt-2 lg:mt-0">
                <p className="text-xs text-center lg:text-left">100% Secure delivery without contacting the courier</p>
                <p className="text-xs text-center lg:text-left">
                  Need help? Call Us: <strong className="text-red-500">+ 1245 5489</strong>
                </p>
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                    onClick={toggleLanguageDropdown}
                  >
                    Language
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {languageDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50">
                      <div className="py-1">
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleLanguageSelect("English")}>English</button>
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleLanguageSelect("Spanish")}>Spanish</button>
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleLanguageSelect("German")}>German</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                    onClick={toggleCurrencyDropdown}
                  >
                    USD
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {currencyDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50">
                      <div className="py-1">
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleCurrencySelect("USD")}>USD</button>
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleCurrencySelect("NPR")}>NPR</button>
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleCurrencySelect("EURO")}>EURO</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${stickyClass}`}>
          <div className="container mx-auto flex flex-wrap items-center  relative">
            <img className="w-1/4 md:w-1/6 mx-auto lg:mx-0" src={logo} alt="logo" />
            <form className="ml-auto flex-1 relative">
              <input
                className="border border-gray-300 px-4 py-3 w-full rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
                type="text"
                placeholder="Search for products..."
                value={searchInput}
                onChange={handleSearchChange}
              />
            
              {suggestions.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md z-50">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </form>
            <div className="flex items-center gap-4 ml-4 mt-2 lg:mt-0">
              <div className="profile">
                <Link to={"/Profile"}>
                  <i className="fa-solid fa-user bg-green-600 text-white rounded p-2 text-xl" />
                </Link>
              </div>
              <div className="cart relative">
                <button
                  type="button"
                  className="relative bg-pink-500 px-2 py-1 rounded text-white"
                >
                  <Link to={"/Cart"}>
                    <i className="fa-solid fa-cart-shopping text-white text-xl" />
                  </Link>
                  <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full px-1">
                    {state.cartItems ? state.cartItems.length : 0}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<><Home /> <Shop/></>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/Category/:cid/" element={<Category/>}/>
        <Route path="/CheckOut" element={<Checkout/>}/>
        <Route path="/TrackingData" element={<TrackingData/>}/>
      </Routes>
    </>
  );
}

export default Header;
