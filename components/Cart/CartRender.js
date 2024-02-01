import React from 'react'
import { UseSelector, useSelector } from 'react-redux';
import CartIcon from './CartIcon';
import CartUi from './CartUi';
function CartRender() {
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
  return (
    <>
     {/* <div>CartRender</div>
    <div>CartRender</div>
    <div>CartRender</div> */}
    <div className='bg-gray-200 w-6/12 mx-auto my-36 '>
    {cartItems.map(items=><CartUi items={items}></CartUi>)}
    </div>
  
    </>
   
  )
}

export default CartRender