import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ResSlider() {
  return (
    <Carousel >
       <Carousel.Item className='w-full h-[600px] '> 
    <div>
    <img className='w-full h-[600px] opacity-95' src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg' alt=''></img>
        <Carousel.Caption>
        <h3 className='text-4xl font-bold font-mono text-green-200'>Being Foody is good sometimes</h3>
        <p className='py-2 text-white '>Let's Order Something tasty and healthy</p>
      </Carousel.Caption>
        </div>
    
    </Carousel.Item>

    <Carousel.Item className='w-full h-[600px]'>
        <div>
        <img className='w-full h-[600px] opacity-95' src='https://as2.ftcdn.net/v2/jpg/01/13/38/01/1000_F_113380165_2kPTzifB5QbOaAGrTRFIvvMCHUwpBqm4.jpg' alt=''></img>
        <Carousel.Caption>
        <h3 className='text-4xl font-bold font-mono text-blue-200'>Feeling Hungry??</h3>
        <p className='py-2 text-white mb-4'>Checkout Yummy Foods Nearby You!!!</p>
      </Carousel.Caption>
        </div>
    
      
    </Carousel.Item>
   
    <Carousel.Item className='w-full h-[600px]'>
    <div >
    <img className='w-full h-[600px] opacity-95' src='https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,h_1080,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg' alt=''></img>
        <Carousel.Caption>
        <h3 className='text-4xl font-bold font-mono text-amber-100'>Mid-Night Cravings?</h3>
        <p className='py-2 text-white '>Add some items in your cart</p>
      </Carousel.Caption>
        </div>
    
    </Carousel.Item>
  </Carousel>
  )
}

export default ResSlider