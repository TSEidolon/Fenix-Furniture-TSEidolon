import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab } from '../store/cart';


export default function CartTab() {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  }

  return (
    <div className={`fixed top-0 right-0 bg-[#DEECDD] shadow-2xl w-80 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full " : ""}
    `}>
      <h2 className='p-5 text-black text-2xl'> Shopping Cart </h2>
      <div>
        {carts.map((item, key) => 
          <CartItem key={key} data={item} />
        )}
      </div>
      <div className='grid grid-cols-2 font-semibold'>
        <button className='bg-[#82ac86] text-black border-r- hover:text-zinc-200 hover:bg-black ' onClick={handleCloseTabCart}>CLOSE</button>
        <button className='bg-[#82ac86] text-black border-l-[1px] hover:text-zinc-200 hover:bg-black '>CHECKOUT</button>
      </div>
    </div>
  )
}
