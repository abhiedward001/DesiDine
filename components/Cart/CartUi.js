import React from 'react';
import {useDispatch} from 'react-redux';
import {cartImageUrl} from '../../utils/data';
import {updateItem, removeItem, clearItem} from '../../utils/cartSlice';

function CartUi({items}) {
	console.log(items);
	const dispatch = useDispatch();
	const addItemHandler = () => {
		dispatch(updateItem(items));
	};

	const removeItemHandler = () => {
		if (items.qty === 1) {
			dispatch(clearItem(items));
		}

		dispatch(removeItem(items));
	};

	return (
		<div className='flex  my-8 justify-between p-3 border-b border-black border-dotted '>
			<img className='rounded-md border border-black h-52 w-60' src={`${cartImageUrl}${items.imageId}`} alt='no image'></img>
			<ul className='my-auto '>
				<li className='py-2 font-bold 	text-pretty'>{items.name}</li>
				<li className='py-2 text-gray-600'>{`₹${items.price / 100 || items.defaultPrice / 100} `}</li>
				<button className='bg-gray-700   text-white px-3 mr-2 rounded-md my-3' onClick={addItemHandler}>+</button>
				<span className='my-3'>{items.qty}</span>
				<button className='bg-gray-700  text-white px-3 ml-2 rounded-md my-3' onClick={removeItemHandler}>-</button>
			</ul>
			<div className='my-auto font-semibold text-xl '>{`₹${(items.price / 100 || items.defaultPrice / 100) * (items.qty)}`}</div>
		</div>

	);
}

export default CartUi;
