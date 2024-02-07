import React from 'react'
// import headershow from "../../assets/headershow.jpg"
function HeaderShowcase() {
  return (
    <>
            <div className='relative my-16'>
                <div className='search absolute top-44 left-80 mx-32  opacity-80 '>
                    <h2 className='text-4xl text-white font-extrabold opacity-90'>Order Now</h2>
                    <h3 className='text-2xl text-gray-200 font-semibold my-2'>From your nearest resturants</h3>
                    <input className='bg-white w-[550px] h-[55px] rounded-lg px-4 ' type='text' placeholder='Type Your Delivery Location'></input>
                    <button className='w-[90px] h-[55px] bg-red-400 rounded-lg mx-2' >Submit</button>
                    <h3 className='text-lg my-3 text-white font-semibold opacity-100'>We deliver in Bangalore,Delhi,Chandigarh,Hyderabad,Uttar Pradesh...</h3>
                </div>

                <div className='Image h-[500px]  w-10/12 mx-auto '>
                    <img className='h-[500px] w-full rounded-b-[350px] rounded-t-[20px] ' src="https://github.com/abhiedward001/AssetDesiDine/blob/main/headerShow.jpg" alt='Not displaying'></img>
                </div>

                <div className='w-6/12  mx-auto mt-[120px] flex justify-center'>
                    <h1 className='text-3xl font-bold text-red-400'>Get Your Favourite Food</h1>
                </div>

                <div className='w-6/12  mx-auto mt-4 flex justify-center'>
                    <h1 className='text-xl font-bold text-gray-400'>in 4 simple steps</h1>
                </div>
            </div>

            <div className='flex flex-wrap justify-center w-full'>

                <div className='w-[200px] h-[300px] mx-12 '>
                    <i class="fa-brands fa-cc-discover text-5xl  my-4 ml-16"></i>
                    <h1 className='my-3 text-xl font-bold text-red-400'>Discover</h1>
                    <p className='text-gray-500'>Find resturants that deliver to you by entering your address</p>
                </div>

                <div className='w-[200px] h-[300px] mx-12 '>
                    <i class="fa-solid fa-store text-5xl  my-4 ml-16"></i>
                    <h1 className='my-3 text-xl font-bold text-red-400'>Choose</h1>
                    <p className='text-gray-500'>Browse hundrerds of menues to find the best food you like</p>
                </div>

                <div className='w-[200px] h-[300px] mx-12 '>
                    <i class="fa-brands fa-amazon-pay text-5xl my-4 ml-16"></i>
                    <h1 className='my-3 text-xl font-bold text-red-400'>Pay</h1>
                    <p className='text-gray-500'>Pay fast, secure online or Cash on delivery</p>
                </div>

                <div className='w-[200px] h-[300px] mx-12 '>
                    <i class="fa-solid fa-truck text-5xl my-4 ml-16"></i>
                    <h1 className='my-3 text-xl font-bold text-red-400'>Delivery</h1>
                    <p className='text-gray-500'>Food is prepared and delivered to your door ASAP</p>
                </div>

            </div>
    </>
  )
}

export default HeaderShowcase