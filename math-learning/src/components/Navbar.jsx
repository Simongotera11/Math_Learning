import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaBars, FaTimes } from 'react-icons/fa'; // Icons for title and hamburger menu

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Title and Icon */}
          <div className="flex items-center">
            <FaBookOpen className="text-2xl text-green-700 mr-2" />
            <span className="text-xl font-bold text-gray-800">Math Learning</span>
          </div>

          {/* Right Section: Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-700 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/practice"
              className="text-gray-700 hover:text-green-700 transition-colors duration-200"
            >
              Practice
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" /> // Close icon
              ) : (
                <FaBars className="text-2xl" /> // Hamburger icon
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block text-gray-700 hover:text-green-700 px-3 py-2 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/practice"
                className="block text-gray-700 hover:text-green-700 px-3 py-2 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Practice
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;