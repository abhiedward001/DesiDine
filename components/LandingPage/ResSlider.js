import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Import slide1 from "../../assets/slide.jpg"
// import slide2 from "../../assets/slide2.jpg"
// import slide3 from "../../assets/slide3.webp"

function ResSlider() {
	return (
		<Carousel >
			<Carousel.Item className='w-full h-[600px] '>
				<div>
					<img className='w-full h-[600px] opacity-95' src='https://cdn.jsdelivr.net/gh/abhiedward001/AssetDesiDine/slide.jpg' alt=''></img>
					<Carousel.Caption>
						<h3 className='text-4xl font-bold font-mono text-green-200'>Being Foody is good sometimes</h3>
						<p className='py-2 text-white '>Let's Order Something tasty and healthy</p>
					</Carousel.Caption>
				</div>

			</Carousel.Item>

			<Carousel.Item className='w-full h-[600px]'>
				<div>
					<img className='w-full h-[600px] opacity-95' src='https://cdn.jsdelivr.net/gh/abhiedward001/AssetDesiDine/slide2.jpg' alt=''></img>
					<Carousel.Caption>
						<h3 className='text-4xl font-bold font-mono text-blue-200'>Feeling Hungry??</h3>
						<p className='py-2 text-white mb-4'>Checkout Yummy Foods Nearby You!!!</p>
					</Carousel.Caption>
				</div>

			</Carousel.Item>

			<Carousel.Item className='w-full h-[600px]'>
				<div >
					<img className='w-full h-[600px] opacity-95' src='https://cdn.jsdelivr.net/gh/abhiedward001/AssetDesiDine/slide3.webp' alt=''></img>
					<Carousel.Caption>
						<h3 className='text-4xl font-bold font-mono text-amber-100'>Mid-Night Cravings?</h3>
						<p className='py-2 text-white '>Add some items in your cart</p>
					</Carousel.Caption>
				</div>

			</Carousel.Item>
		</Carousel>
	);
}

export default ResSlider;
