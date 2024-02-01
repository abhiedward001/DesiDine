import React from 'react'
import { cartImageUrl } from '../../utils/data'
function CartUi({items}) {
  return (
   <div className='flex flex-wrap my-4 space-x-20 p-4'>
        <img className='rounded-md' src={`${cartImageUrl}${items.imageId}`} alt="no image"></img>
        <ul className='my-auto'>
            <li>{items.name}</li>
            <li>{items.defaultPrice/100}</li>
        </ul>
   </div>
  )
}

export default CartUi