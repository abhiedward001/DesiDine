import React from "react";
import { imgUrl } from "../../utils/data";


const ResturantCard = (props) => {
     
    console.log(props.resData);
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = props.resData?.info;
    return (
        <div className="resCard  rounded-lg m-6  w-[350px] h-[400px]  bg-gray-100 hover:bg-gray-200 hover:scale-110 transition duration-500 cursor-pointer">
            <img alt="Res-LOGO" className="pb-3 h-[250px] w-full rounded-t-lg" src={`${imgUrl}${cloudinaryImageId}`}></img>
            <div className="mx-2">
                <h3 className="font-bold ">{name}</h3>
                <h4 className="py-1 text-gray-500">{cuisines.join(", ")}</h4>
                <h4 className="py-1">{avgRating + " ⭐"}</h4>
                <h4 className="py-1">{200 + " ₹"}</h4>
                <h4 className="py-1">{deliveryTime}</h4>
            </div>

        </div>
    )
}

export default ResturantCard;