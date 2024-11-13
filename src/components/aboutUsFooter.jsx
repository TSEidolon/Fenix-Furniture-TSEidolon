import React from 'react'

export default function AboutUsFooter() {
  return (
    <div>
      <div className='about-us py-10'>
        <section className='about-us-section flex items-center justify-between gap-10'>
          <div className="about-us-section-left">
            <div className='hero-section-right-background '>
              <div className='bg-[#deecdd] rounded-full  w-[550px] h-[450px]' >
                <p className=' flex justify-center items-center h-full'> Picture </p>
              </div>
            </div>
          </div>
          <div className="about-us-section-right  flex flex-col  gap-8 w-full">
            <h1 className='text-6xl '>Super CatchPhrase Here!!!!!!!!!!</h1>
            <p className='max-w-[70%]'> Mini Paragraph section description thingy here.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga.</p>
            <p className='max-w-[70%]'> Mini Paragraph section description thingy here.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga.</p>
            <div className=' gap-2 flex items-center  group'>
              <div className='text-2xl  group-hover:translate-y-2 transform transition-transform duration-500'> ↓ </div>
              <div className='text-xl font-semibold p-2 text-black '> Check Out Our Socials Below </div>
              <div className='text-2xl group-hover:translate-y-2 transform transition-transform duration-500'> ↓ </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
