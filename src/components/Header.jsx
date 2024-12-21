import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle the mobile menu visibility

  // Handle "Buy Now" button click to navigate to checkout page
  const handleBuyNowClick = () => {
    navigate('/checkout'); // This navigates to /checkout
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg flex justify-between items-center px-6 py-4 z-50">
      <div className="logo text-xl font-bold text-yellow-400" style={{ fontFamily: "'Press Start 2P', cursive" }}>
        PixelZone
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex">
        <ul className="flex gap-6" style={{ fontFamily: "'Press Start 1P', cursive" }}>
          <li><a href="/" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#features" className="hover:text-yellow-400">Features</a></li>
          <li><a href="#games" className="hover:text-yellow-400">Games</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>

      {/* "Buy Now" button and Hamburger Menu (on small screens) */}
      <div className="flex items-center">
        <button
          onClick={handleBuyNowClick}  // Navigate to the checkout page on click
          className="bg-yellow-400 text-gray-800 px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          Buy Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white ml-4 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col gap-4 mt-4 bg-gray-800 px-6 py-4 rounded-lg">
          <li><a href="/" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#features" className="hover:text-yellow-400">Features</a></li>
          <li><a href="#games" className="hover:text-yellow-400">Games</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
