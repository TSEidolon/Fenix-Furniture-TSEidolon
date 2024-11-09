import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { PiChatCircleDotsLight } from "react-icons/pi";

export default function HeroSection() {
  return (
    <div className='py-5'>
      <section className='hero-section flex items-center gap-5'>
        <div className="hero-section-left flex flex-col gap-10">
          <h1 className='text-6xl '>Super CatchPhrase Here!!!!!!!!!!</h1>
          <p className='max-w-[70%]'> Mini Paragraph section description thingy here.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga.</p>
          <div className='flex gap-10'>
            <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200 hover:bg-[#C1DFC4] hover:text-black'> Shop Now </button>
            <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200 hover:bg-[#C1DFC4] hover:text-black'> Read More </button>
          </div>
        </div>
        <div className="hero-section-right">
          <div className='hero-section-right-background '>
            <div className='bg-[#deecdd] rounded  w-[650px] h-[450px]' >
              <p className=' flex justify-center items-center h-full'> Picture </p>
            </div>
          </div>
          
        </div>
      </section>
      <section className='flex justify-between items-center gap-10  pt-10'>
        <div className='flex  items-center gap-10 border-2 border-black rounded min-w-[300px]'>
          <div className="hero-banner-left border-r-2 border-r-black p-3 ">
            <CiDeliveryTruck className='h-[70px] w-[70px]' />
          </div>
          <div className="hero-banner-right pr-3">
            <h2 className='font-bold'>Free Shipping</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='flex  items-center gap-10 border-2 border-black rounded min-w-[350px]'>
          <div className="hero-banner-left border-r-2 border-r-black p-3 ">
            <CiDiscount1 className='h-[70px] w-[70px]' />
          </div>
          <div className="hero-banner-right pr-3">
            <h2 className='font-bold'>Free Shipping</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='flex  items-center gap-10 border-2 border-black rounded min-w-[350px]'>
          <div className="hero-banner-left border-r-2 border-r-black p-3 ">
            <PiChatCircleDotsLight className='h-[70px] w-[70px]' />
          </div>
          <div className="hero-banner-right pr-3">
            <h2 className='font-bold'>Free Shipping</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        
      </section>

    </div>
  )
}
