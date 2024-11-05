import React from 'react'
import { products } from '../products'

export default function PopularProduct() {
  const firstProduct = products[3];
  const secondProduct = products[4];

  return (
    <div>
      <h2> Most Pupular Items </h2>
      <div className='popular-product-main-content'>
        <div className='top-content flex justify-center items-center'>
          <div>
            <h3>{firstProduct.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel corporis, dicta obcaecati vitae et dolorem laboriosam nostrum molestiae eaque.</p>
            <button>
              Add to Cart
            </button>
          </div>
          <div>
            <img src={firstProduct.image} alt="" className='h-80 ' />
          </div>
        </div>
        <div className='bottom-content flex flex-row-reverse justify-center items-center'>
          <div className='max-w-full'>
            <h3 className='text-2xl py-5'>{secondProduct.name}</h3>
            <p className='max-w-[500px] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia dicta eos saepe obcaecati numquam culpa aperiam quis, sapiente mollitia nam, sit velit, eveniet quam fugit repellendus deserunt repellat? Cum!</p>
            <button className='text-lg font-semibold pt-5'>
              Add to Cart
            </button>
          </div>
          <div>
            <img src={secondProduct.image} alt="" className='h-80 ' />
          </div>
        </div>
      </div>
    </div>
  )
}
