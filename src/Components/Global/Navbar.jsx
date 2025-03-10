import React from 'react'
import { Link } from 'react-router';



const handleCopy = (event) => {
  event.preventDefault();
console.error("You can not copy");


};

const Navbar = () => {
  return (

    <nav onCopy={handleCopy} className="bg-red-500 p-4 flex justify-between items-center">
    <div className="text-white text-2xl font-bold cursor-pointer">Pet Haven</div>
    <ul className="flex gap-6 text-white">
     <Link to="/home"> <li className="hover:text-amber-300 cursor-pointer">Home</li></Link>
    <Link to="/products">  <li className="hover:text-amber-300 cursor-pointer">Shop</li></Link>
      <Link to="/services"><li className="hover:text-amber-300 cursor-pointer">Services</li></Link>
      
      <Link to="/about"><li className="hover:text-amber-300 cursor-pointer">About Us</li></Link>
     <Link to="/login"><li className="hover:text-amber-300 cursor-pointer">Contact</li></Link>
    </ul>
  </nav>


  )
}

export default Navbar