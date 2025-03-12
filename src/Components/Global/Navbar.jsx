import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const handleCopy = (event) => {
  event.preventDefault();
  console.error("You cannot copy");
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav onCopy={handleCopy} className="bg-red-500 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold cursor-pointer">Pet Haven</div>
      <ul className="flex gap-6 text-white">
        <Link to="/home"><li className="hover:text-amber-300 cursor-pointer">Home</li></Link>
        <Link to="/products"><li className="hover:text-amber-300 cursor-pointer">Shop</li></Link>
        
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="hover:text-amber-300 cursor-pointer focus:outline-none"
          >
            Services
          </button>
          {dropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-40 bg-white text-red-500 shadow-lg rounded-lg">
              <Link to="/services/grooming">
                <li className="p-2 hover:bg-amber-300 cursor-pointer">Grooming</li>
              </Link>
              <Link to="/services/training">
                <li className="p-2 hover:bg-amber-300 cursor-pointer">Training</li>
              </Link>
              <Link to="/services/boarding">
                <li className="p-2 hover:bg-amber-300 cursor-pointer">Boarding</li>
              </Link>
            </ul>
          )}
        </div>

        <Link to="/about"><li className="hover:text-amber-300 cursor-pointer">About Us</li></Link>
        <Link to="/login"><li className="hover:text-amber-300 cursor-pointer">Login / Signup</li></Link>
        <Link to="/about"><li className="hover:text-amber-300 cursor-pointer">About Us</li></Link>
        <Link to="/login"><li className="hover:text-amber-300 cursor-pointer">Contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
