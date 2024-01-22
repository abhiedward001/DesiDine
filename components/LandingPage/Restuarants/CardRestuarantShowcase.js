import React from 'react'
import ResSlider from '../ResSlider';
import { useEffect, useState } from 'react';
import ResturantCard from './RestuarantCard';
import Shimmer from '../Shimmer';
import Footer from '../Footer';

function CardRestuarantShowcase() {
  const [listOfResturants, setListOfResturnts] = useState([]);
  const [filterResturants, setFilterResturants] = useState([]);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.680619997448414&lng=77.4815347418189&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    let arr = [5, 4, 3, 6, 2, 1, 0, 8, 7, 9, 10];
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
    <>
      <div className='bg-gray-200 w-10/12 mx-auto mt-20'>
        <ResSlider></ResSlider>
      </div>

      <div className='my-10 py-10 flex justify-center'>
        <h1 className='text-3xl font-semibold text-gray-700'>  Chekout the Top Restaurants nearby you</h1>
      </div>

      {
        (filterResturants.length === 0) ?
          (
            <div className="resContainer flex flex-wrap  justify-center pb-5 mb-3">
              <Shimmer ></Shimmer>
            </div>
          ) : (
            <div className="resContainer flex flex-wrap  justify-center pb-5 mb-3">
              {filterResturants.map((item) => <ResturantCard resData={item} />)}
            </div>
          )
      }
    <Footer></Footer>
      

    </>
  )
}

export default CardRestuarantShowcase;