import React from 'react'
import { FaFacebook } from "react-icons/fa";

export default function AboutUsFooter() {
  return (
    <div className='h-[90vh] pt-10'>
        <section className='about-us-section flex items-center justify-between gap-10 pb-10 h-[60%]'>
          <div className="about-us-section-left">
            <div className='hero-section-right-background '>
              <div className='bg-[#deecdd] rounded-full  w-[550px] h-[450px]' >
                <p className=' flex justify-center items-center h-full'> Picture </p>
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
        <section className='footer flex justify-around items-start pt-5 gap-5 bg-[#C1DFC4] rounded-md h-[40%]'>
          <div className='flex flex-col gap-3 items-start'>
            <h4 className='text-xl font-semibold'>Other Info</h4>
            <button className='text-sm'>Terms & Conditions</button>
            <button className='text-sm'>Privacy Policy</button>
            <button className='text-sm'>License</button>
          </div>
          <div className='flex flex-col gap-3 items-start'>
            <h4 className='text-xl font-semibold'>Media</h4>
            <button className='text-sm'>Blogs</button>
            <button className='text-sm'>Photo Gallery</button>
            <button className='text-sm'>Latest Release</button>
          </div>
          <div className='flex flex-col gap-3 items-start'>
            <h4 className='text-xl font-semibold'>Company</h4>
            <button className='text-sm'>About Us</button>
            <button className='text-sm'>Career</button>
            <button className='text-sm'>Services</button>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='text-xl font-semibold'>Socials</h4>
              <button className='flex items-center gap-2'>
                <p className='text-sm'>Facebook</p>
                <FaFacebook className='text-sm'/>
              </button> 
              <button className='flex items-center gap-2'>
                <p className='text-sm'>X / Twitter</p>
                <FaFacebook className='text-sm'/>
              </button> 
              <button className='flex items-center gap-2'>
                <p className='text-sm'>Instagram</p>
                <FaFacebook className='text-sm'/>
              </button> 

          </div>
        </section>

    </div>
  )
}
