import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTab } from '../store/cart';
import HeroSection from './heroSection';

export default function Header() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity)
      setTotalQuantity(total); 
      }, [carts]);
  
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  }

  return (
    <div>
      <header className='flex justify-between items-center mb-5 pt-2 '>
        <Link to="/" className='text-xl font-semibold'>El-Logo</Link>
        <div className='flex gap-10'>
          <ul className='flex items-center gap-[4.4rem] text-lg pr-[6.5rem]'>
                <button >Home</button>
                <button>Products</button>
                <button>About Us</button>
                <button>Contact</button>
          </ul>
          <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleOpenTabCart}>
            <img src={iconCart} alt="" className='w-6' />
            <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
          </div>
        </div>

      </header>
      
      <HeroSection />
    </div>
    )
}
