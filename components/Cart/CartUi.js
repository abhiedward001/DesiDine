import React from 'react'
import { cartImageUrl } from '../../utils/data'
import {useSelector } from 'react-redux';
function CartUi({items}) {
console.log(items);
  return (
    <div className='flex flex-wrap my-4 space-x-20 p-3'>
        <img className='rounded-md' src={`${cartImageUrl}${items.imageId}`} alt="no image"></img>
        <ul className='my-auto'>
            <li>{items.name}</li>
            <li>{(items.price/100 )*(items.qty)}</li>
        </ul>
        <div className='my-auto'>
            <button className='bg-green-300  px-3 mx-2 rounded-md'>+</button>
            <span>{items.qty}</span>
            <button className='bg-red-300  px-3 mx-2 rounded-md'>-</button>
        </div>
   </div>
   
   

  )
}

export default CartUi