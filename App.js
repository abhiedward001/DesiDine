import React from 'react'
import reactDOM from "react-dom/client";
import Home from './components/LandingPage/Home';
import CardRestuarantShowcase from './components/Restuarants/CardRestuarantShowcase';
import EachRestaurant from './components/Restuarants/EachRestaurant'
import Home from './components/LandingPage/Home';
import Header from './components/LandingPage/Header';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from 'react';
import CartRender from './components/Cart/CartRender';
import About from './components/About';

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
        element: <Home />
      },
      {
        path: '/restuarant',
        element: <CardRestuarantShowcase />
      },
      {
        path: '/restaurant/:resId',
        element: <EachRestaurant />
      }
      ,
      {
        path: '/restuarant/EachItem/:resId',
        element: <EachRestaurant/>
      },
      {
        path: '/cart',
        element: <CartRender />
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },

  {
    path: '/restuarant',
    element: <CardRestuarantShowcase />
  }
  ,
  {
    path: '/restuarant/EachItem/:resId',
    element: <EachRestaurant/>
  },
  {
    path: '/cart',
    element: <CartRender />
  },
  {
    path:'/about',
    element:<About></About>
  }

]);


const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);