import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { PiChatCircleDotsLight } from "react-icons/pi";
import catCouch from "../assets/images/cat-couch.png"
import { Parallax } from 'react-scroll-parallax';


export default function HeroSection({navScrollOne,navScrollFour}) {
  return (
    <div className='py-10 xl:py-10 '>
      <section className='hero-section flex flex-col   items-center gap-5 
      xl:flex-row 
      
      '>
        <div className="hero-section-left flex flex-col gap-10 xl:items-start items-center order-2 xl:order-1 xl:pt-0 pt-20">
          <h1 className='text-6xl max-w-[80%] text-center xl:text-left'>Comfort Loved by All, Pets Included!</h1>
          <p className='max-w-[80%] xl:max-w-[70%] text-center xl:text-left'> Experience ultimate comfort with Fenix Furniture—crafted for your family, tested and approved by your furry companions!</p>
          <div className='flex gap-10'>
            <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200 hover:bg-[#C1DFC4] hover:text-black'
            onClick={() => navScrollOne.current.scrollIntoView({behavior: "smooth"})}
            > Shop Now </button>
            <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200 hover:bg-[#C1DFC4] hover:text-black'
            onClick={() => navScrollFour.current.scrollIntoView({behavior: "smooth"})}
            > Read More </button>
          </div>
        </div>
        <div className="hero-section-right select-none relative px-5 xl:px-0 xl:order-2 order-1">
          <div className='hero-section-right-background '>
            <div className='bg-hero-background bg-cover bg-no-repeat rounded w-[450px] md:w-[650px]  h-[450px] ' >
              <Parallax className='h-full w-full flex items-center justify-center' speed={-10}>
                <img src={catCouch} alt="furniture" className='p-2  select-none absolute w-full ' />
              </Parallax>
              
            </div>
          </div>
          
        </div>
      </section>
      <section className='flex flex-col xl:flex-row md:justify-between  items-center gap-10  pt-20'>
        <div className='flex  items-center gap-10 border-2 border-black rounded min-w-[380px]'>
          <div className="hero-banner-left border-r-2 border-r-black p-3 ">
            <CiDeliveryTruck className='h-[70px] w-[70px]' />
          </div>
          <div className="hero-banner-right pr-3 ">
            <h2 className='font-bold'>Free Shipping</h2>
            <p>Free shipping on all orders!</p>
          </div>
        </div>
        <div className='flex  items-center gap-10 border-2 border-black rounded min-w-[380px]'>
          <div className="hero-banner-left border-r-2 border-r-black p-3 ">
            <CiDiscount1 className='h-[70px] w-[70px]' />
          </div>
          <div className="hero-banner-right pr-3">
            <h2 className='font-bold'>Shop Our Deals</h2>
            <p>Great prices on stylish furniture!</p>
          </div>
        </div>
        <div className='flex  items-center gap-10 border-2 border-black rounded min-w-[380px]'>
          <div className="hero-banner-left border-r-2 border-r-black p-3 ">
            <PiChatCircleDotsLight className='h-[70px] w-[70px]' />
          </div>
          <div className="hero-banner-right pr-3">
            <h2 className='font-bold'>Chat With Us</h2>
            <p>Get help instantly, anytime here!</p>
          </div>
        </div>
        
      </section>

    </div>
  )
}
