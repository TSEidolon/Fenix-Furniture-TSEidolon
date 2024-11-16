import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import toaPicture from "../assets/images/toa-heftiba-unsplash.jpg";


import chameleon from "../assets/images/chameleon.png"

export default function AboutUsFooter() {
  return (
    <div className='h-[90vh] pt-12'>
        <section className='about-us-section flex items-center justify-between gap-10 pb-12 h-[60%]'>
          <div className="about-us-section-left">
            <div className='hero-section-right-background '>
              <div className='bg-[#deecdd] relative mx-auto rounded-lg overflow-hidden  w-[550px] h-[450px]' >
                <img src={toaPicture} alt="" className='w-full h-full object-cover rounded-[5px]' />
              </div>
            </div>
          </div>
          <div className="about-us-section-right  flex flex-col  gap-8 w-full">
            <h1 className='text-6xl w-full'>Super CatchPhrase Here!!!!</h1>
            <p className='max-w-[70%]'> Mini Paragraph section description thingy here.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga.</p>
            <p className='max-w-[70%]'> Mini Paragraph section description thingy here.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga.</p>
            <div className=' gap-2 flex items-center  group'>
              <div className='text-2xl  group-hover:translate-y-2 transform transition-transform duration-500'> ↓ </div>
              <div className='text-xl font-semibold p-2 text-black '> Check Out Our Socials Below </div>
              <div className='text-2xl group-hover:translate-y-2 transform transition-transform duration-500'> ↓ </div>
            </div>
          </div>
        </section>
        <section className='footer flex justify-around items-start pt-5 gap-5 bg-[#C1DFC4] rounded-md h-[40%] relative'>
          <div className='flex flex-col gap-3 items-start'>
            <h4 className='text-xl font-semibold'>Other Info</h4>
            <button className='text-sm hover:text-gray-500'>Terms & Conditions</button>
            <button className='text-sm hover:text-gray-500'>Privacy Policy</button>
            <button className='text-sm hover:text-gray-500'>License</button>
          </div>
          <div className='flex flex-col gap-3 items-start'>
            <h4 className='text-xl font-semibold'>Media</h4>
            <button className='text-sm hover:text-gray-500'>Blogs</button>
            <button className='text-sm hover:text-gray-500'>Photo Gallery</button>
            <button className='text-sm hover:text-gray-500'>Latest Release</button>
          </div>
          <div className='flex flex-col gap-3 items-start'>
            <h4 className='text-xl font-semibold'>Company</h4>
            <button className='text-sm hover:text-gray-500'>About Us</button>
            <button className='text-sm hover:text-gray-500'>Career</button>
            <button className='text-sm hover:text-gray-500'>Services</button>
          </div>
          <div className='flex flex-col gap-3 '>
            <h4 className='text-xl font-semibold'>Socials</h4>
              <button className='flex items-center gap-2 hover:text-gray-500'>
                <p className='text-sm '>Facebook</p>
                <FaFacebook className='text-sm '/>
              </button> 
              <button className='flex items-center gap-2 hover:text-gray-500'>
                <p className='text-sm '>X / Twitter</p>
                <FaXTwitter className='text-sm'/>
              </button> 
              <button className='flex items-center gap-2 hover:text-gray-500'>
                <p className='text-sm '>Instagram</p>
                <FaInstagram className='text-sm'/>
              </button> 

          </div>
          <img src={chameleon} alt="chameleon" className="absolute right-[0%] top-[-16%] w-[100px]" />
        </section>

    </div>
  )
}
