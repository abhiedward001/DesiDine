import React from 'react'
// import headerImage from '../../assets/foodWall.jpg';
import Header from './Header';
import HeaderShowcase from './HeaderShowcase';
import { useState, useEffect } from 'react';
import Restuarant from './Restuarants/Restuarant';
import Footer from './Footer';



function Home() {

    const [listOfResturants, setListOfResturnts] = useState([]);
    const [filterResturants, setFilterResturants] = useState([]);



    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.680619997448414&lng=77.4815347418189&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        let arr=[5,4,3,6,2,1,0,8,7,9,10];
        let i = 0;
        for (; i <= 10; i++) {
            if (jsonData?.data?.cards[arr[i]]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                break;
            }
        }
        setListOfResturnts(jsonData?.data?.cards[arr[i]]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //    console.log(jsonData?.data);
        setFilterResturants(jsonData?.data?.cards[arr[i]]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //    console.log(i);
    }

    return (

        <div className='w-full '>
            {/* <Header></Header> */}
            <HeaderShowcase></HeaderShowcase>
            <Restuarant filterResturants={filterResturants}></Restuarant>
            <Footer></Footer>
        </div>

    )
}

export default Home;