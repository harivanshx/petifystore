import React from 'react'
import Navbar from '../Components/Global/Navbar'

import SampleProduct from '../Components/Products/SampleProduct'
import Brands from '../Components/Products/Brands'

const Products = () => {
  return (
<>
    <Navbar/>
    <Brands/>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

   <SampleProduct/>
   <SampleProduct/>
   <SampleProduct/>
   <SampleProduct/>
   <SampleProduct/>
   <SampleProduct/>
   <SampleProduct/>
   <SampleProduct/>
   <SampleProduct/> 
</div>
 
</>

  )
}

export default Products