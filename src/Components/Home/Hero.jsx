import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <header className="text-center py-20 bg-yellow-200">
    <h1 className="text-5xl font-bold text-red-600">Welcome to Pet Haven</h1>
    <p className="mt-4 text-xl text-gray-700">Your one-stop shop for all pet needs!</p>
    <Link to="/products">
    <button   className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
  Shop Now
    </button>
    </Link>
  </header>
  )
}

export default Hero