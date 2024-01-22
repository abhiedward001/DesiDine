import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ResSlider() {
  return (
    <Carousel>
    <Carousel.Item className='w-full h-[600px]'>
        <div>
        <img className='w-full h-[600px]' src='https://w0.peakpx.com/wallpaper/514/512/HD-wallpaper-indian-restaurant-san-francisco-deccan-house-sf-north-indian-food.jpg' alt=''></img>
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
        </div>
    
      
    </Carousel.Item>
    <Carousel.Item className='w-full h-[600px]'> 
    <div >
    <img className='w-full h-[600px]' src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg' alt=''></img>
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
        </div>
    
    </Carousel.Item>
    <Carousel.Item className='w-full h-[600px]'>
    <div >
    <img className='w-full h-[600px]' src='https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/16:9/w_1920,h_1080,c_limit/new%20restaurant%20menus%20in%20Mumbai.jpg' alt=''></img>
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
        </div>
    
    </Carousel.Item>
  </Carousel>
  )
}

export default ResSlider