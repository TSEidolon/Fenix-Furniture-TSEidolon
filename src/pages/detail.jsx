import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import chameleon from "../assets/images/chameleon.png"
import HeaderDetail from '../components/headerDetail';

export default function Detail() {
  const {slug} = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  
  useEffect (() => {
    const findDetail = products.filter(product => product.slug === slug);
    if (findDetail.length > 0){
      setDetail(findDetail[0])
    } else {
      window.location.href = '/';
    }
  }, [slug])
   const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
   }
   const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
   }
  const handleAddToCart = () => {
      dispatch(addToCart({
          productId: detail.id,
          quantity: quantity
      }));
    }

  return (
    <div className=''>
      <HeaderDetail />
      <h2 className='text-3xl text-center'> Furniture Details </h2>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-5 pb-10 lg:pb-0'>
        <div>
          <img src={detail.image} alt="" className='w-full'/>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>
            {detail.name}
          </h1>
          <p className='font-bold text-3xl'> ${detail.price}</p>
          <div className='flex gap-5'>
            <div className='flex gap-2 justify-center items-center'>
              <button className='bg-gray-100 h-full w-10 font-bold rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
              <span className='bg-gray-200 h-full w-10 font-bold rounded-xl flex justify-center items-center'>{quantity}</span>
              <button className='bg-gray-100 h-full w-10 font-bold rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
            </div>
            <button className='hover:text-zinc-200 hover:bg-black bg-[#C1DFC4] text-black px-7 py-3 rounded-xl shadow-2xl font-semibold' onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          <p className='text-lg text-justify leading-relaxed'>
            {detail.description}
          </p>
        </div>

      </div>
      <section className='footer flex  flex-wrap justify-around items-start pt-5 pb-10 lg:pb-0 px-5 lg:px-0 gap-5 bg-zinc-300 rounded-md h-[40%] relative'>
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
          <img src={chameleon} alt="chameleon" className="absolute lg:right-[0%] lg:top-[-16%] right-[0%] sm:top-[-16%] top-[-7%] lg:w-[100px] w-10" />
      </section>
    </div>
  )
}
