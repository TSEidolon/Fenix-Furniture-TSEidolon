import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductCart(props) {
  const {id, name, price, image, slug} = props.data;

  return (
    <div className='bg-white p-5 rounded-xl shadow-sm '>
      <Link to={slug}>
        <img src={image} alt="" className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
      </Link>
    </div>
  )
}
