import React from 'react'
import { UseSelector, useSelector } from 'react-redux';
import CartIcon from './CartIcon';
import CartUi from './CartUi';
import { Link } from 'react-router-dom';


function CartRender() {
  const totalAmount=useSelector((store)=>store.cart.totalAmount);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  let initialValue=0;
  const sumWithInitial = cartItems.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.price/100)*(currentValue.qty),
    initialValue,
  );
  // console.log(sumWithInitial);
  return (
    <>
     
    <div className='w-6/12 mx-auto mt-12  py-4 px-auto '>
    {cartItems.length!==0 && <h1 className='flex justify-center text-4xl' >Your Cart Items !!</h1>}
    {cartItems.length===0 && <h1 className='flex justify-center text-4xl' >Please, Insert some items in your cart 👀</h1>}
    </div>
    
      <div className='bg-gray-200 w-6/12 mx-auto my-24 shadow-md rounded-lg '>
       
        {cartItems.map(items => <CartUi key={items.id} items={items}></CartUi>)}
       {cartItems.length!==0 &&  <div className='Checkout w-6/12 mx-auto my-4  py-4'>
          <ul className=' flex flex-col   items-center border-y border-black border-dotted'>
            <li className='my-2 '>Subtotal  ₹ {sumWithInitial}</li>
            <li className='my-2'>Discount  -₹30</li>
            <li className='my-2'>Delivery  ₹20</li>
            <li className='my-2'>Tax  ₹40</li>
          </ul>
          <ul className='flex flex-wrap justify-between my-4'>
            <li className='font-bold'>Total</li>
            <li className='font-bold'>₹ {sumWithInitial+30}</li>
          </ul>
          <ul className='flex flex-col items-center  py-4'>
            <button className='bg-blue-200  rounded-md px-3 h-8'>Proceed To Checkout</button><br></br>
            <button className='bg-gray-700 text-white  rounded-md px-3 h-10'><Link to='/restuarant'>Continue Adding More Food</Link></button>
          </ul>

        </div>}
      </div>

    </>

  )
}

export default CartRender