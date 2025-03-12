import React from 'react'
import Navbar from '../Components/Global/Navbar'

import SampleProduct from '../Components/Products/SampleProduct'
import Brands from '../Components/Products/Brands'

const Products = () => {
  return (
<>
    
    <Brands/>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">




    <a href="/products">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <img
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRz0Ys_-kEGH2sEi9efUHnHX4EvRJRUgPkCCWV0D0E7-bV9VGyxgAnxlqQplqT0NqAz8R8pCNXkjphOFYQLZBPjLDhI_pE_LU6vlvcPN3ysz9biZbSlbzRf"
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

    <a href="/products">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcReA7P375QbsI25pcFhohg03J94THoGdruSLuoz61cd9LGtKWwnX24LhJMrR9A-EFWVczntnyatzo3F1eCXlTGND8xWBgYu-8jFuvZWl9sT_hbnv7nZMHKo"
          alt="Pet Bed"
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-4 text-xl font-semibold">Peanut Butter</h3>
        <p className="text-gray-600">
          Peanut Butter.
        </p>
        <button className='m-5 p-3 items-center justify-center bg-amber-500 rounded-lg'>Buy Now</button>
      </div> 
    </a>

    <a href="/products">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTJjrD2FbvZbFUGhenbgPSymFXJKrU3rE_o4L0axsfdIHqfD_6b_zRQOIHgSwOIS5W4AnyzCm6U7zGrxkre1B6O10-sdflwzeqTB0h79XxLybcc-zqSyv8-Q"
          alt="Pet Bed"
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-4 text-xl font-semibold">Complete Food</h3>
        <p className="text-gray-600">
          The complete food for your pet  
        </p>
        <button className='m-5 p-3 items-center justify-center bg-amber-500 rounded-lg'>Buy Now</button>
      </div> 
    </a>







</div>
 
</>

  )
}

export default Products