import React from 'react'
import { products } from '../products'
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { forwardRef } from 'react';

export default forwardRef(function PopularProduct(props,ref) {

  const firstProduct = products[3];
  const secondProduct = products[4];

  return (
    <div className='py-10 flex items-center justify-center flex-col gap-5 lg:max-w-full lg:px-0 px-5 '>
      <h2 {...props} ref={ref} className='text-4xl py-10'> Most Popular Items </h2>
      <div  className='popular-product-main-content lg:bg-[#DEECDD] bg-none '>
        <section  className='top-content flex lg:flex-row flex-col justify-center items-center gap-10  lg:pb-none pb-10 '>
          <div className='px-10 flex  flex-col  justify-center lg:items-start items-center  '>
            <h3 className='text-2xl py-5 font-bold'>{firstProduct.name}</h3>
            <p className='lg:max-w-[600px] max-w-[100%] sm:max-w-[70%] text-lg text-justify'>Elevate your space with this best-selling chair, crafted from premium wood and soft cotton for lasting comfort. Featuring a stylish blue fabric finish, it combines timeless elegance with modern design. Perfect for any room, this chair offers unmatched quality and coziness, making it a favorite among our customers.</p>
            <Link to={firstProduct.slug} className='text-lg font-semibold pt-5 '>
              <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200  hover:bg-slate-800 '>
                Read More
              </button>
            </Link>
            
          </div>
          <div className='lg:bg-[#C1DFC4] bg-none rounded-md lg:translate-x-10 lg:-translate-y-10 w-[420px] h-[420] select-none '>
            <Parallax className='h-full w-full' speed={-5}>
              <img src={firstProduct.image} alt="" className='w-full  lg:-translate-x-28 lg:translate-y-16 lg:p-0 p-5' />
            </Parallax>
            
          </div>
        </section>
        <section className='bottom-content flex  flex-col lg:flex-row-reverse justify-center items-center lg:gap-10 gap-5'>
          <div className='px-10 flex  flex-col  justify-center lg:items-start items-center '>
            <h3 className='text-2xl py-5 font-bold'>{secondProduct.name}</h3>
            <p className='lg:max-w-[600px] max-w-[100%] sm:max-w-[70%] text-lg text-justify'>Introducing our most popular chair, crafted with the finest wood and rich brown leather. Designed for comfort and durability, it combines elegance with functionality. The soft leather and sturdy wooden frame create a luxurious seating experience, making it the perfect centerpiece for any room. Comfort and style, redefined.</p>
            <Link to={secondProduct.slug}>
              <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200  hover:bg-slate-800'>
                Read More
              </button>
            </Link>

          </div>
          <div className='lg:bg-[#C1DFC4] bg-none rounded-md lg:-translate-x-10 lg:translate-y-8 w-[420px] h-[420]'>
            <Parallax className='h-full w-full' speed={5} translateY={[20, -10]}>
              <img src={secondProduct.image} alt="" className='w-full lg:translate-x-20 lg:-translate-y-16 lg:p-0 p-5' />
            </Parallax>
            
          </div>
        </section>
      </div>
    </div>
  )
})
