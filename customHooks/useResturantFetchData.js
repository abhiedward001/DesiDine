import React, {useEffect, useState} from 'react';
import {resURL} from '../utils/data';

const useResturantFetchData = resId => {
	const [cartDetailObject, setCartDetailObject] = useState({});

	useEffect(() => {
		fetchCartData();
	}, []);

	const fetchCartData = async () => {
		const url = `${resURL}${resId}`;
		const corsUrl = 'https://thingproxy.freeboard.io/fetch/' + encodeURIComponent(url);
		// Console.log(`${resURL}${resId}`)
		const cartData = await fetch(corsUrl);
		const jsonCartData = await cartData.json();
		// Console.log(jsonCartData);

		setCartDetailObject(jsonCartData);
	};

	return cartDetailObject;
};

export default useResturantFetchData;
