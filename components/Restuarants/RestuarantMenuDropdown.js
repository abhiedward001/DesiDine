import React, {useState} from 'react';
import FoodInfo from './FoodInfo.js';

function RestuarantMenuDropdown({data, toggle, setToggle, setShowFlashMessage}) {
	const toggleHandler = () => {
		setToggle();
	};

	return (

		<div className='w-6/12 mx-auto   shadow-[0_-1px_38px_-2px_rgba(0,0,0,0.3)] rounded-lg my-4 p-4 '>

			<div className='flex flex-wrap justify-between cursor-grab' onClick={toggleHandler}>
				<span className='font-bold text-2xl'>{data.title} ({data.itemCards.length})</span>
				<span className='text-2xl hover:cursor-pointer' onClick={toggleHandler}> {toggle ? '⬆' : '⬇'} </span>
			</div>
			<div>
				{/* {console.log(data.itemCards)} */}
				<ul>
					{data.itemCards.map(item => (<li key={item?.card?.info?.id} >{toggle && <FoodInfo itemValue={item?.card?.info} setShowFlashMessage={setShowFlashMessage}></FoodInfo>}</li>))}
				</ul>
			</div>
			{/* {toggle && toggleData} */}

		</div>
	);
}

export default RestuarantMenuDropdown;
