import React from 'react';
import Navbar from '../Components/Global/Navbar';

const LandingPage = () => {
  return (
  
  <>

    
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-cyan-600 flex items-center justify-center">
      <div className="text-center text-white p-8 max-w-3xl">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">Welcome to Petify</h1>
        <p className="text-xl mb-8">
          Your one-stop platform to find, adopt, and care for your furry friends. Join us in making every pet's life happier and healthier.
        </p>
        <div className="flex justify-center gap-6">
          
          <a href="/home">
          <button  className="bg-yellow-400 text-teal-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
            Explore Pets
          </button>
          </a>
          <button className="bg-pink-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-300 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="mt-12">
          <img src="src\assets\Product Images\Featured\Dogfood.jpg" alt="Cute Pets" className="rounded-2xl shadow-xl w-full max-w-2xl mx-auto" />
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
