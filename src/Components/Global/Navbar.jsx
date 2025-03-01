import React from 'react'



const handleCopy = (event) => {
  event.preventDefault();
console.error("You can not copy");


};

const Navbar = () => {
  return (

    <nav onCopy={handleCopy} className="bg-red-500 p-4 flex justify-between items-center">
    <div className="text-white text-2xl font-bold cursor-pointer">Pet Haven</div>
    <ul className="flex gap-6 text-white">
     <a href="/home"> <li className="hover:text-amber-300 cursor-pointer">Home</li></a>
    <a href="/products">  <li className="hover:text-amber-300 cursor-pointer">Shop</li></a>
      <a href="/services"><li className="hover:text-amber-300 cursor-pointer">Services</li></a>
      
      <a href="/about"><li className="hover:text-amber-300 cursor-pointer">About Us</li></a>
     <a href="/login"><li className="hover:text-amber-300 cursor-pointer">Contact</li></a>
    </ul>
  </nav>


  )
}

export default Navbar