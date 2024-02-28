import React from 'react'

function CartManage() {
    return (
        <>
            <div className='bg-black text-white'>
                <div>
                    <ul className='flex flex-wrap space-x-10'> 
                        <li className='text-white'>Name</li>
                        <li>Cateogary</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Value</li>
                        <li>Action</li>
                    </ul>
                </div>
            </div>

        </>

    )
}

export default CartManage