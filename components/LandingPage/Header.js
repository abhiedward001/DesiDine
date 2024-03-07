import React from 'react'
import { Link } from "react-router-dom";
import CartIcon from '../Cart/CartIcon';
import { useState } from 'react';
import { UseSelector, useSelector } from 'react-redux';

function Header(props) {

    // const [login,setLogin]=useState(false);   
    // const loginHandler=()=>{
    //     setLogin(!login);
    // } 
    const cartItems=useSelector((store)=>store.cart.items);
    // console.log(cartItems);
    return (
        <div className="headerContainer  bg-gray-800 h-280 w-full mb-4">
            <div className="Header flex justify-between ">
                <div className="headerIconContainer max-w-20 ">
                    <img className="h-18 max-w-20 " src='https://cdn-icons-png.flaticon.com/512/3703/3703377.png' alt='' />
                </div>

                <ul className="flex  py-3">
                    <button className="px-4 py-2   text-white font-mono text-xl font-bold"><Link to='/'> HOME </Link> </button>
                    <button className="px-4  py-2  text-white font-mono text-xl font-bold  "><Link to='/restuarant'>  Restaurants </Link></button>
                    <button className="px-4  py-2  text-white font-mono text-xl font-bold "><Link to='/about'>AboutUs</Link></button>
                </ul>

                <ul className="flex  py-3">
                    <button className="px-4  py-2 text-white text-2xl" ><Link to='/Cart'> <i className="fa-solid fa-cart-shopping"></i> Cart( {cartItems.length} )</Link></button>
                     <button className="px-3  py-2 text-white font-mono text-xl font-bold "><Link to='/login'>Login</Link></button>
                </ul>
            </div>

        </div>
    )
}

export default Header