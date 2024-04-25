import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ResSlider from '../LandingPage/ResSlider';
import Shimmer from '../LandingPage/Shimmer';
import Footer from '../LandingPage/Footer';
import ResturantCard from './RestuarantCard.js';

function CardRestuarantShowcase() {
	const [listOfResturants, setListOfResturnts] = useState([]);
	const [filterResturants, setFilterResturants] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const swiggyApi = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.680619997448414&lng=77.4815347418189&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
		const corsUrl = 'https://thingproxy.freeboard.io/fetch/' + swiggyApi;
		console.log(corsUrl);
		const data = await fetch(corsUrl);
		const jsonData = await data.json();
		const array = [5, 4, 3, 6, 2, 1, 0, 8, 7, 9, 10];
		let i = 0;
		for (; i <= 10; i++) {
			if (jsonData?.data?.cards[array[i]]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
				break;
			}
		}

		setListOfResturnts(jsonData?.data?.cards[array[i]]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		//    Console.log(jsonData?.data);
		setFilterResturants(jsonData?.data?.cards[array[i]]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		//    Console.log(i);
	};

	return (
		<>
			<div className='bg-gray-200 w-10/12 mx-auto mt-20'>
				<ResSlider></ResSlider>
			</div>

			<div className='my-10 py-10 flex justify-center'>
				<h1 className='text-3xl font-semibold text-gray-700'>  Chekout the Top Restaurants nearby you</h1>
			</div>

			{
				(filterResturants.length === 0)
					? (
						<div className='resContainer flex flex-wrap  justify-center pb-5 mb-3'>
							<Shimmer ></Shimmer>
						</div>
					) : (
						<div className='resContainer flex flex-wrap  justify-center pb-5 mb-3'>
							{filterResturants.map(item => <Link key={item.info.id} to={`EachItem/${item.info.id}`}>  <ResturantCard resData={item} />   </Link>)}
						</div>
					)
			}
			<Footer></Footer>

		</>
	);
}

export default CardRestuarantShowcase;
