import React from 'react'
import { UseSelector, useSelector } from 'react-redux';
import CartIcon from './CartIcon';
import CartUi from './CartUi';
function CartRender() {
  const totalAmount=useSelector((store)=>store.cart.totalAmount);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      {/* <div>CartRender</div>
    <div>CartRender</div>
    <div>CartRender</div> */}
      <div className='bg-gray-200 w-6/12 mx-auto my-36 '>
        {cartItems.map(items => <CartUi key={items.id} items={items}></CartUi>)}
        <div className='Checkout w-6/12 mx-auto my-4  py-4'>
          <ul className=' flex flex-col   items-center border-y border-black border-dotted'>
            <li className='my-2 '>Subtotal  ₹ 80</li>
            <li className='my-2'>Discount  -₹30</li>
            <li className='my-2'>Delivery  ₹20</li>
            <li className='my-2'>Tax  ₹40</li>
          </ul>
          <ul className='flex flex-wrap justify-between my-4'>
            <li>Total</li>
            <li>₹ {totalAmount}</li>
          </ul>
          <ul className='flex flex-col items-center  py-4'>
            <button className='bg-blue-200  rounded-md px-3 h-8'>Proceed To Checkout</button><br></br>
            <button className='bg-gray-700 text-white  rounded-md px-3 h-10'>Continue Adding More Food</button>
          </ul>

        </div>
      </div>

    </>

  )
}

export default CartRender