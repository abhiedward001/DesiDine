import React, {useState, lazy, Suspense} from 'react';
import reactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Home from './components/LandingPage/Home.js';
// Import CardRestuarantShowcase from './components/Restuarants/CardRestuarantShowcase';
// import EachRestaurant from './components/Restuarants/EachRestaurant'
// import Home from './components/LandingPage/Home';
import Header from './components/LandingPage/Header.js';
import appStore from './utils/appStore.js';
import CartRender from './components/Cart/CartRender.js';
import About from './components/About.js';
import Animation from './utils/Animation.js';
import Login from './components/Auth/Login.js';

async function delayForDemo(promise) {
	await new Promise(resolve => {
		setTimeout(resolve, 5000);
	});
	return promise;
}

const HomeLazy = lazy(() => delayForDemo(import('./components/LandingPage/Home.js')));
const CardRestuarantShowcase = lazy(() => delayForDemo(import('./components/Restuarants/CardRestuarantShowcase.js')));
const EachRestaurantLazy = lazy(() => delayForDemo(import('./components/Restuarants/EachRestaurant.js')));
export function App() {
	return (
		<Provider store={appStore}>
			<div className='Body '>
				<Header></Header>
				<Outlet />
			</div>
		</Provider>
	);
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<Animation></Animation>}> <HomeLazy/> </Suspense>,
			},
			{
				path: '/restuarant',
				element: <Suspense fallback={<Animation></Animation>}><CardRestuarantShowcase /></Suspense>,
			},
			{
				path: '/restaurant/:resId',
				element: <Suspense fallback={<Animation></Animation>}> <EachRestaurantLazy/> </Suspense>,
			},
			{
				path: '/restuarant/EachItem/:resId',
				element: <Suspense fallback={<Animation></Animation>}> <EachRestaurantLazy/> </Suspense>,
			},
			{
				path: '/cart',
				element: <CartRender />,
			},
			{
				path: '/about',
				element: <About></About>,
			},
			{
				path: '/login',
				element: <Login/>,
			},
		],
	},

	{
		path: '/restuarant',
		element: <Suspense fallback={<Animation></Animation>}><CardRestuarantShowcase /></Suspense>,
	},
	{
		path: '/restuarant/EachItem/:resId',
		element: <Suspense fallback={<Animation></Animation>}> <EachRestaurantLazy/> </Suspense>,
	},
	{
		path: '/cart',
		element: <CartRender />,
	},
	{
		path: '/about',
		element: <About></About>,
	},
	{
		path: '/login',
		element: <Login/>,
	},

]);

const root = reactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router}></RouterProvider>);
