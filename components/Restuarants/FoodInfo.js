import React from 'react'
import { imgUrl } from '../../utils/data';
import { useDispatch, useSelector } from 'react-redux';
import { addItem,updateItem } from '../../utils/cartSlice';
import { useState } from 'react';

function FoodInfo({ itemValue ,setShowFlashMessage}) {
//    console.log(itemValue);
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
   

    const cartItemAddHandler = (items) => {

        setShowFlashMessage(true);
        setTimeout(() => {
          setShowFlashMessage(false);
        }, 3000);
        
        let check = false;
        cartItems.map((eachItem) => {
            if (eachItem.id === items.id) {
                dispatch(updateItem(items));
                check = true;
                return;
            }
        })

        const newData = { ...items, qty: 1 }
        if (!check) {
            dispatch(addItem(newData));
        }




    }

    return (
        <div className="my-2 py-4 border-b border-black text-left flex justify-between ">
          
            {/* {console.log(itemValue)} */}
            <div className="w-9/12 py-4">
                <h3 className='font-bold text-lg'>{itemValue?.name}</h3>
                <span>₹ {itemValue.price/100 || itemValue.defaultPrice/100}</span>
                <p className='text-gray-600 py-3'> {itemValue?.description}</p>
            </div>

            <div className="w-3/12 p-4" >
                <img alt="image not available" className='w-32 h-32 border border-black rounded-md' src={imgUrl + itemValue.imageId}></img>
                <div>
                    <button className='bg-blue-300 m-2 rounded-lg w-20' onClick={() => cartItemAddHandler(itemValue)}>ADD</button>
                </div>

            </div>

        </div>

    )
}

export default FoodInfo