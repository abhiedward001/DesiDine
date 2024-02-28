import React from "react";
import { useEffect,useState } from "react";
import { resURL } from "../utils/data";

const useResturantFetchData = (resId) => {

    const [cartDetailObject, setCartDetailObject] = useState({});

    useEffect(() => {
        fetchCartData();
    }, [])

    const fetchCartData = async () => {
        const url=`${resURL}${resId}`;
        const corsUrl='https://corsproxy.org/?'+ encodeURIComponent(url);
        // console.log(`${resURL}${resId}`)
        const cartData = await fetch(corsUrl);
        const jsonCartData = await cartData.json();
        // console.log(jsonCartData);

        setCartDetailObject(jsonCartData);
    }
    
    return cartDetailObject;
}

export default useResturantFetchData;