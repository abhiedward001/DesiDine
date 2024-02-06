import React from 'react'
import { cartImageUrl } from '../../utils/data'
import {useSelector,useDispatch } from 'react-redux';
import { updateItem,removeItem, clearItem } from '../../utils/cartSlice';
function CartUi({items}) {
console.log(items);
const dispatch = useDispatch();
const addItemHandler=()=>{
  dispatch(updateItem(items));
}
const removeItemHandler=()=>{
  if(items.qty===1){
    dispatch(clearItem(items));
  }
  dispatch(removeItem(items));
}
  return (
    <div className='flex flex-wrap my-8 space-x-20 p-3 border-b border-black border-dotted '>
        <img className='rounded-md border border-black' src={`${cartImageUrl}${items.imageId}`} alt="no image"></img>
        <ul className='my-auto'>
            <li className='py-2 font-bold'>{items.name}</li>
            <li className='py-2 text-gray-600'>{`₹${items.price/100}`}</li>
            <button className='bg-gray-700   text-white px-3 mx-2 rounded-md my-3' onClick={addItemHandler}>+</button>
            <span className='my-3'>{items.qty}</span>
            <button className='bg-gray-700  text-white px-3 mx-2 rounded-md my-3' onClick={removeItemHandler}>-</button>
        </ul>
        <div className='my-auto font-semibold '>{`₹${(items.price/100 )*(items.qty)}`}</div>
   </div>
   
   

  )
}

export default CartUi