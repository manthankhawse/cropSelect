import React, { useContext, useState } from "react"


const DataContext = React.createContext();

export const useData = ()=>{
    return useContext(DataContext);
}


export const DataProvider = (props)=>{
    // yield prediction
    const [yieldCrop, setYieldCrop] = useState("");
    const [yieldArea, setYieldArea] = useState("");
    const [yieldVal, setYieldVal] = useState("")

    //crop recommendation
    const [recCrop, setRecCrop] = useState("");

    //fertilizer recommendation
    const [fertilizer, setFertilizer] = useState("")

    // price prediction 
    const [priceCrop, setPriceCrop] = useState("");
    const [priceState, setPriceState] = useState("");
    const [priceDistrict, setPriceDistrict] = useState("");
    const [priceMarket, setPriceMarket] = useState("");
    const [cropPrice, setCropPrice] = useState("");

    const value = {
        yieldCrop,
        setYieldCrop,
        yieldArea,
        setYieldArea,
        yieldVal,
        setYieldVal,
        recCrop,
        setRecCrop,
        fertilizer,
        setFertilizer,
        priceCrop,
        setPriceCrop,
        priceState,
        setPriceState,
        priceDistrict,
        setPriceDistrict,
        priceMarket,
        setPriceMarket,
        cropPrice,
        setCropPrice
    }

    return (
        <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
    )
}