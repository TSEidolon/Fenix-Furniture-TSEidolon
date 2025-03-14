import React, {useState, useEffect} from 'react'
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../store/cart';

export default function CartItem(props) {
  const {productId, quantity} = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch(0);
  useEffect(() => {
    const findDetail = products.filter(product => product.id === productId)[0];
    setDetail(findDetail);
  }, [productId])
  const handleMinusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1,
    }));
  }
  const handlePlusQuantity = () => {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity + 1,
    }));
  }

  return (
    <div className='flex justify-between items-center  text-black font-medium p-2 border-b-2 gap-4 rounded-md'>
      <img src={detail.image} alt="" className='w-12'/>
      <h3 className='text-base'>{detail.name}</h3>
      <p> ${detail.price * quantity}</p>
      <div className='w-20 flex justify-between items-center px-2'>
        <button className='bg-black  text-zinc-200 rounded-full w-6 h-6 ' onClick={handleMinusQuantity}>-</button>
        <span className='px-1'>{quantity}</span>
        <button className='bg-black text-zinc-200 rounded-full w-6 h-6 ' onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  )
}
