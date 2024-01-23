import React from 'react'
import { imgUrl } from '../../utils/data';
import { useDispatch } from 'react-redux';
import { addItem }  from '../../utils/cartSlice';

function FoodInfo({ itemValue }) {
 
     const dispatch=useDispatch();
     const cartItemAddHandler=()=>{
        dispatch(addItem(itemValue));
     }
    return (
        <div className="my-2 py-4 border-b border-black text-left flex justify-between ">
            {/* {console.log(itemValue)} */}
            <div className="w-9/12 py-4">
                <h3 className='font-bold text-lg'>{itemValue?.name}</h3>
                <span>₹ {itemValue.price / 100}</span>
                <p className='text-gray-400 py-3'> {itemValue?.description}</p>
            </div>
         
            <div className="w-3/12 p-4" >
                <img alt="image not available" className='w-auto' src={imgUrl + itemValue.imageId}></img>
                <div>
                    <button className='bg-blue-300 m-2 rounded-lg w-16' onClick={cartItemAddHandler}>+ ADD -</button>
                </div>

            </div>

        </div>

    )
}

export default FoodInfo