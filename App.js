import React from 'react'
import reactDOM from "react-dom/client";
import Home from './components/LandingPage/Home';
import CardRestuarantShowcase from './components/LandingPage/Restuarants/CardRestuarantShowcase';
import EachRestaurant from './components/LandingPage/Restuarants/EachRestaurant';
import Home from './components/LandingPage/Home';
import Header from './components/LandingPage/Header';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
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
    ]
  },

  {
    path: '/restuarant',
    element: <CardRestuarantShowcase />
  }

]);


const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);