import React from 'react'
import { products } from '../products'
import { Link } from 'react-router-dom';


export default function PopularProduct() {

  const firstProduct = products[3];
  const secondProduct = products[4];

  return (
    <div className='flex items-center justify-center flex-col gap-5 max-w-full'>
      <h2> Most Pupular Items </h2>
      <div className='popular-product-main-content'>
        <div className='top-content flex justify-center items-center gap-10'>
          <div>
            <h3 className='text-2xl py-5'>{firstProduct.name}</h3>
            <p className='max-w-[600px] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel corporis, dicta obcaecati vitae et dolorem laboriosam nostrum molestiae eaque.</p>
            <Link to={firstProduct.slug} className='text-lg font-semibold pt-5'>
              <button>
                Read More
              </button>
            </Link>
            
          </div>
          <div>
            <img src={firstProduct.image} alt="" className='h-[26rem] ' />
          </div>
        </div>
        <div className='bottom-content flex flex-row-reverse justify-center items-center gap-10'>
          <div className=''>
            <h3 className='text-2xl py-5'>{secondProduct.name}</h3>
            <p className='max-w-[600px] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia dicta eos saepe obcaecati numquam culpa aperiam quis, sapiente mollitia nam, sit velit, eveniet quam fugit repellendus deserunt repellat? Cum!</p>
            <Link to={secondProduct.slug}>
              <button className='text-lg font-semibold pt-5'>
                Read More
              </button>
            </Link>

          </div>
          <div>
            <img src={secondProduct.image} alt="" className='h-[26rem] ' />
          </div>
        </div>
      </div>
    </div>
  )
}
