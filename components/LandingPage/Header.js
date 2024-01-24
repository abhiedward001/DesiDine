import React from 'react'
import { Link } from "react-router-dom";
import CartIcon from '../Cart/CartIcon';
import { UseSelector, useSelector } from 'react-redux';

function Header() {
    const cartItems=useSelector((store)=>store.cart.items);
    return (
        <div className="headerContainer  bg-gray-800 h-280 w-full mb-4">
            <div className="Header flex justify-between ">
                <div className="headerIconContainer max-w-20 ">
                    <img className="h-18 max-w-20 " src='https://cdn-icons-png.flaticon.com/512/3703/3703377.png' alt='' />
                </div>

                <ul className="flex  py-3">
                    <li className="px-4 py-2   text-white font-mono text-lg font-bold hover:bg-gray-900 hover:rounded-md antialiased"><Link to='/'> HOME </Link> </li>
                    <li className="px-4  py-2  text-white font-mono text-lg font-bold hover:bg-gray-900 hover:rounded-md antialiased"><Link to='/restuarant'> Restuarants </Link></li>
                    <li className="px-4  py-2  text-white font-mono text-lg font-bold hover:bg-gray-900 hover:rounded-md antialiased">About Us</li>
                    <button className="login-Btn px-2 py-2 text-white font-mono text-md font-bold hover:bg-gray-900 hover:rounded-md antialiased"> </button>
                </ul>

                <ul className="flex  py-3">
                    <li className="px-4  py-2 text-white text-2xl  " ><i class="fa-solid fa-cart-shopping"></i> Cart( {cartItems.length} )</li>
                    <li className="px-4  py-2 text-white font-mono text-lg font-bold hover:bg-gray-900 hover:rounded-md antialiased">SignIn</li>
                </ul>
            </div>

        </div>
    )
}

export default Header