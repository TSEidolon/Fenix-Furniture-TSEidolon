import React from 'react'
import { products } from '../products'
import { Link } from 'react-router-dom';


export default function PopularProduct() {

  const firstProduct = products[3];
  const secondProduct = products[4];

  return (
    <div className='py-10 flex items-center justify-center flex-col gap-5 max-w-full '>
      <h2 className='text-4xl py-10'> Most Popular Items </h2>
      <div className='popular-product-main-content bg-[#DEECDD]'>
        <section className='top-content flex justify-center items-center gap-10'>
          <div className='px-10'>
            <h3 className='text-2xl py-5 font-bold'>{firstProduct.name}</h3>
            <p className='max-w-[600px] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel corporis, dicta obcaecati vitae et dolorem laboriosam nostrum molestiae eaque.</p>
            <Link to={firstProduct.slug} className='text-lg font-semibold pt-5'>
              <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200  hover:bg-slate-800 '>
                Read More
              </button>
            </Link>
            
          </div>
          <div className='bg-[#C1DFC4] rounded-md translate-x-16 -translate-y-10 w-[420px] h-[420]'>
            <img src={firstProduct.image} alt="" className='w-full  -translate-x-36 translate-y-16' />
          </div>
        </section>
        <section className='bottom-content flex flex-row-reverse justify-center items-center gap-10'>
          <div className='px-10'>
            <h3 className='text-2xl py-5 font-bold'>{secondProduct.name}</h3>
            <p className='max-w-[600px] text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia dicta eos saepe obcaecati numquam culpa aperiam quis, sapiente mollitia nam, sit velit, eveniet quam fugit repellendus deserunt repellat? Cum!</p>
            <Link to={secondProduct.slug}>
              <button className='text-lg font-semibold mt-5 p-2 border-2 bg-black rounded-md text-zinc-200  hover:bg-slate-800'>
                Read More
              </button>
            </Link>

          </div>
          <div className='bg-[#C1DFC4] rounded-md -translate-x-16 translate-y-8 w-[420px] h-[420]'>
            <img src={secondProduct.image} alt="" className='w-full translate-x-32 -translate-y-16' />
          </div>
        </section>
      </div>
    </div>
  )
}
