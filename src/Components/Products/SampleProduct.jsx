import React from 'react'

const SampleProduct = () => {
  return (
  
         <a href="/products">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <img
          src="https://images.pexels.com/photos/7282667/pexels-photo-7282667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Pet Bed"
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-4 text-xl font-semibold">Cozy Pet Beds</h3>
        <p className="text-gray-600">
          A comfortable space for your pet to relax.
        </p>
        <button className='m-5 p-3 items-center justify-center bg-amber-500 rounded-lg'>Buy Now</button>
      </div> 
    </a>





 
  )
}

export default SampleProduct