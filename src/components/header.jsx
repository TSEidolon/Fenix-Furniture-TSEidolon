import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTab } from '../store/cart';


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
        <Link to="/" className='text-2xl font-semibold pr-5'>Fenix Furniture</Link>
        <div className='flex gap-0 lg:gap-10 '>
          <ul className='flex items-center  gap-5 lg:gap-[4.4rem] lg:text-lg text-sm lg:pr-[6.5rem] pr-5'>
                <Link to="/" className='relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[#84a787] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#84a787] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>Home</Link>
                <button className='relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[#84a787] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#84a787] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>Products</button>
                <button className='relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[#84a787] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#84a787] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>About Us</button>
                <button className='relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[#84a787] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#84a787] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>Contact</button>
          </ul>
          <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleOpenTabCart}>
            <img src={iconCart} alt="" className='w-6' />
            <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
          </div>
        </div>

      </header>
      
      {/* <HeroSection /> */}
    </div>
    )
}
