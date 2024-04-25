import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import useResturantFetchData from '../../customHooks/useResturantFetchData';
import ResMenuShimmer from '../Shimmer/ResMenuShimmer';
import RestuarantMenuDropdown from './RestuarantMenuDropdown.js';

const Restuarant = () => {
	const {resId} = useParams();
	const resInfo = useResturantFetchData(resId); // Using custom hook for fetching the data

	const [elementIndex, setElementIndex] = useState(0);
	const [showFlashMessgae, setShowFlashMessage] = useState(false);

	if (Object.keys(resInfo).length === 0) {
		return <ResMenuShimmer />;
	}

	const array = [5, 4, 3, 6, 2, 1, 0, 8, 7, 9, 10];
	let i = 0; let index = 0;
	for (; i <= 10; i++) {
		if (resInfo?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
			break;
		}
	}

	for (; index <= 10; index++) {
		if (resInfo?.data?.cards[index]?.card?.card?.info) {
			break;
		}
	}
	// Console.log(i);
	// console.log(j);

	const menuitems = resInfo?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
	const {name} = resInfo?.data?.cards[index]?.card?.card?.info;
	// Console.log(resInfo)
	const filterCateogary = menuitems.filter(item => (item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'));

	return (
		<div className='menu  my-10 py-4 text-center'>

			{showFlashMessgae && <div class='flex mx-auto bg-blue-400 text-white text-sm font-bold px-4 py-1 w-64 fixed rounded-md right-5' role='alert'>
				<svg className='fill-current w-4 h-4 mr-2 mt-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z' /></svg>
				<p className='text-black'>Item Added to Cart !!!</p>
			</div>}
			<h1 className='font-bold text-2xl my-12'>{name}</h1>
			<h2 className='font-bold text-xl my-4'>{resInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
			<ul>

				{/* here using the lifiting up state so that parent element can control the child element */}

				{
					filterCateogary.map((item, index) => (<li key={Math.random()}>{
						<RestuarantMenuDropdown data={item.card.card} toggle={index === elementIndex} setToggle={() => setElementIndex(index)} setShowFlashMessage={setShowFlashMessage}>

						</RestuarantMenuDropdown>
					}</li>))
				}
			</ul>
		</div>
	);
};

export default Restuarant;
