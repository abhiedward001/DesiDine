import React from 'react';
import {UseSelector, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from '../LandingPage/Footer';
import Animation from '../../utils/Animation';
import CartUi from './CartUi.js';
import CartIcon from './CartIcon.js';

function CartRender() {
	const totalAmount = useSelector(store => store.cart.totalAmount);
	const cartItems = useSelector(store => store.cart.items);
	console.log(cartItems);
	const initialValue = 0;
	const sumWithInitial = cartItems.reduce(
		(accumulator, currentValue) => accumulator + (currentValue.price / 100 || currentValue.defaultPrice / 100) * (currentValue.qty),
		initialValue,
	);
	// Console.log(sumWithInitial);
	return (
		<>

			<div className='w-6/12 mx-auto py-4 px-auto  '>
				{cartItems.length > 0 && <h1 className='flex justify-center text-4xl' >Your Cart Items !!</h1>}
				{cartItems.length === 0 && <h1 className='flex justify-center text-4xl' >Please, Insert some food in your cart 👀</h1>}
				{cartItems.length === 0 && <Animation></Animation>}
			</div>

			<div className='bg-white w-6/12 mx-auto mb-20 shadow-[0_-1px_38px_-2px_rgba(0,0,0,0.3)] rounded-lg '>

				{cartItems.map(items => <CartUi key={items.id} items={items}></CartUi>)}
				{cartItems.length > 0 && <div className='Checkout w-6/12 mx-auto my-4  py-4'>
					<ul className=' flex flex-col   items-center border-y border-black border-dotted'>
						<li className='my-2 '>Subtotal  ₹ {sumWithInitial}</li>
						<li className='my-2'>Discount  -₹30</li>
						<li className='my-2'>Delivery  ₹20</li>
						<li className='my-2'>Tax  ₹40</li>
					</ul>
					<ul className='flex flex-wrap justify-between my-4'>
						<li className='font-bold text-xl'>Total</li>
						<li className='font-bold text-xl'>₹ {sumWithInitial + 30}</li>
					</ul>
					<ul className='flex flex-col items-center  py-4'>
						<button className='bg-blue-700 text-white rounded-md px-3 h-10'>Proceed To Checkout</button><br></br>
						{/* <button className='bg-gray-700 text-white  rounded-md px-3 h-10'><Link to='/restuarant'>Continue Adding More Food</Link></button> */}
					</ul>

				</div>}

			</div>

			<Footer></Footer>
		</>

	);
}

export default CartRender;
