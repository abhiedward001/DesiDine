import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer flex flex-wrap justify-between bg-gray-900 text-white mx-auto relative  bottom-0 w-full'>
            <div className='pt-10 mx-16'>
                <h1 className='text-4xl font-bold text-white'>Company</h1>
                <ul className='py-12' >
                    <li className='py-2'> Contacts</li>
                    <li className='py-2'> Careers</li>
                    <li className='py-2'> FaQ</li>
                    <li className='py-2'> <Link to='/about'>About Us</Link></li>
                </ul>
            </div>

            <div className='pt-10 px-4'>
                <h1 className='text-4xl font-bold text-white'>Product</h1>
                <ul className='py-12' >
                    <li className='py-2'> <Link to='/'>DesiDine</Link></li>
                </ul>
            </div>

            <div className='pt-10 px-4'>
                <h1 className='text-4xl font-bold text-white'>Complaince</h1>
                <ul className='py-12' >
                    <li className='py-2'> Privacy Policy</li>
                    <li className='py-2'> Terms and Conditions</li>
                </ul>
            </div>
          
            <div className='pt-10 px-4 my-10'>
            <ul className='flex flex-wrap px-4'>
                <li className='px-2 mx-8 text-4xl'><a href="mailto:iam001abhi@gmail.com" target="_blank"><i className="fa-solid fa-envelope text-red-500"></i></a></li>
                <li className='px-2 mx-8 text-4xl' ><a href='https://www.linkedin.com/in/abhishek-jaiswal-b67296191/' target="_blank"><i className="fa-brands fa-linkedin text-blue-600"></i></a></li>
                <li className='px-2  mx-8 text-4xl'><a href='https://github.com/abhiedward001' target='_blank'><i className="fa-brands fa-github text-green-600"></i></a></li>

            </ul>
            </div>
        </div>
    )
}

export default Footer