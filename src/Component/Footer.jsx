import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the custom CSS file

const Footer = () => {
  return (
    <footer id="footer" className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Footer Sections */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="text-lg font-semibold mb-4">About Us</h5>
            <ul className="quick-links">
              <li><Link to="#">Our Story</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="text-lg font-semibold mb-4">Customer Service</h5>
            <ul className="quick-links">
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Returns & Exchanges</Link></li>
              <li><Link to="#">Shipping Information</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <ul className="social">
              <li><a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#" aria-label="Instagram"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="text-lg font-semibold mb-4">Subscribe</h5>
            <form className="flex flex-col">
              <input type="email" placeholder="Your email address" className="p-2 rounded mb-4" />
              <button type="submit" className="bg-[#4a8b3c] text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; Satish Timalsina   Contact Me .</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
