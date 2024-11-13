import React from 'react'
import { products } from '../products'
import ProductCart from '../components/productCart.jsx'
import PopularProduct from '../components/popularProduct.jsx'
import AboutUsFooter from '../components/aboutUsFooter.jsx'

export default function Home() {

  return (
    <div>
      
      <PopularProduct />
      <div>
       <h1 className='text-3xl my-5'>List Products</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
          {products.map((product, key) => 
          <ProductCart key={key} data={product}/> 
        
        )}
        </div>
      </div>

      <AboutUsFooter />
    </div>
  )
}
