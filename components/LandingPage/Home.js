
import React, {useState, useEffect} from 'react';
// Import headerImage from '../../assets/foodWall.jpg';
import Restuarant from '../Restuarants/Restuarant';
import Header from './Header.js';
import HeaderShowcase from './HeaderShowcase.js';
import Footer from './Footer.js';
import axios from 'axios';


function Home() {
    const [listOfResturants, setListOfResturnts] = useState([]);
    const [filterResturants, setFilterResturants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const swiggyApi = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.680619997448414&lng=77.4815347418189&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const corsUrl = 'https://thingproxy.freeboard.io/fetch/' + swiggyApi;

        try {
            const response = await axios.get(corsUrl);
            const jsonData = response.data;
			

            const array = [5, 4, 3, 6, 2, 1, 0, 8, 7, 9, 10];
            let i = 0;
            for (; i <= 10; i++) {
                if (jsonData?.data?.cards[array[i]]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                    break;
                }
            }

            setListOfResturnts(jsonData?.data?.cards[array[i]]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterResturants(jsonData?.data?.cards[array[i]]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
			alert('Error fetching data from Swiggy API:- Cors Issue');
        }
    };

    return (
        <div className='w-full '>
            <HeaderShowcase />
            <Restuarant filterResturants={filterResturants} />
            <Footer />
        </div>
    );
}

export default Home;
