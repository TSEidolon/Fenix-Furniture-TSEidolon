import React from 'react'
import { products } from '../products'
import ProductCart from '../components/productCart.jsx'
import PopularProduct from '../components/popularProduct.jsx'
import AboutUsFooter from '../components/aboutUsFooter.jsx'
import HeroSection from '../components/heroSection.jsx'
import Header from '../components/header.jsx'
import { useRef } from 'react'

export default function Home() {
  const productsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);
  const popProductsRef = useRef(null)


  return (
    <div>
      <Header 
         
        navScrollOne={productsRef} 
        navScrollTwo={aboutUsRef} 
        navScrollThree={contactRef}
      />
      <HeroSection 
      navScrollOne={productsRef}
      navScrollFour={popProductsRef}

      />
      <PopularProduct ref={popProductsRef}/>
      <div ref={productsRef}>
       <h1 className='text-3xl my-15 pt-10 pb-5'>List Products</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 pb-10'>
          {products.map((product, key) => 
          <ProductCart key={key} data={product}/> 
        
        )}
        </div>
      </div>

      <AboutUsFooter ref={aboutUsRef}/>
    </div>
  )
}
