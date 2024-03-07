import React from 'react'
import reactDOM from "react-dom/client";
import Home from './components/LandingPage/Home';
// import CardRestuarantShowcase from './components/Restuarants/CardRestuarantShowcase';
// import EachRestaurant from './components/Restuarants/EachRestaurant'
// import Home from './components/LandingPage/Home';
import Header from './components/LandingPage/Header';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from 'react';
import CartRender from './components/Cart/CartRender';
import About from './components/About';
import { lazy,Suspense } from 'react';
import Animation from './utils/Animation';
import Login from './components/Auth/Login';

async function delayForDemo(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 5000);
  });
  return promise;
}
const HomeLazy=lazy(()=>delayForDemo(import('./components/LandingPage/Home')));
const CardRestuarantShowcase = lazy(() => delayForDemo(import('./components/Restuarants/CardRestuarantShowcase')));
const EachRestaurantLazy=lazy(()=>delayForDemo(import('./components/Restuarants/EachRestaurant')));
export function App() {

  
  return (
    <Provider store={appStore}>
      <div className='Body '>
        <Header></Header>
        <Outlet />
      </div>
    </Provider>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<Animation></Animation>}> <HomeLazy/> </Suspense>
      },
      {
        path: '/restuarant',
        element: <Suspense fallback={<Animation></Animation>}><CardRestuarantShowcase /></Suspense>
      },
      {
        path: '/restaurant/:resId',
        element: <Suspense fallback={<Animation></Animation>}> <EachRestaurantLazy/> </Suspense>
      }
      ,
      {
        path: '/restuarant/EachItem/:resId',
        element: <Suspense fallback={<Animation></Animation>}> <EachRestaurantLazy/> </Suspense>
      },
      {
        path: '/cart',
        element: <CartRender />
      },
      {
        path:'/about',
        element:<About></About>
      }
      ,
      {
        path:'/login',
        element:<Login/>
      }
    ]
  },

  {
    path: '/restuarant',
    element: <Suspense fallback={<Animation></Animation>}><CardRestuarantShowcase /></Suspense>
  }
  ,
  {
    path: '/restuarant/EachItem/:resId',
    element: <Suspense fallback={<Animation></Animation>}> <EachRestaurantLazy/> </Suspense>
  },
  {
    path: '/cart',
    element: <CartRender />
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/login',
    element:<Login/>
  }

]);


const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);