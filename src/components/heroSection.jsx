import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { PiChatCircleDotsLight } from "react-icons/pi";
import catCouch from "../assets/images/cat-couch.png"
import { Parallax } from 'react-scroll-parallax';


export default function HeroSection() {
  return (
    <div className='py-10 xl:py-5'>
      <section className='hero-section flex flex-col   items-center gap-5 
      xl:flex-row
      
      '>
        <div className="hero-section-left flex flex-col gap-10 xl:items-start items-center">
          <h1 className='text-6xl max-w-[80%] text-center xl:text-left'>Super CatchPhrase Here!!!!!!!!!!</h1>
          <p className='max-w-[80%] xl:max-w-[70%] text-center xl:text-left'> Mini Paragraph section description thingy here.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga.</p>
          <div className='flex gap-10'>
            <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200 hover:bg-[#C1DFC4] hover:text-black'> Shop Now </button>
            <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200 hover:bg-[#C1DFC4] hover:text-black'> Read More </button>
          </div>
        </div>
        <div className="hero-section-right select-none relative px-5 xl:px-0">
          <div className='hero-section-right-background '>
            <div className='bg-hero-background bg-cover bg-no-repeat rounded w-[450px] md:w-[650px]  h-[450px] ' >
              <Parallax className='h-full w-full flex items-center justify-center' speed={-10}>
                <img src={catCouch} alt="furniture" className='p-2  select-none absolute w-full ' />
              </Parallax>
              
            </div>
          </div>
          
        </div>
      </section>
      <section className='flex flex-col xl:flex-row md:justify-between  items-center gap-10  pt-10'>
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
