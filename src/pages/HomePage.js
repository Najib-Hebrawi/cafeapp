import React from "react";
import '../App.css';
import HomeSection from "../component/home/homeview/HomeSection";
import CardView from "../component/home/cards/CardView";
import Slider from "../component/home/item/Slider";

function HomePage(){
    return(
        <>
            <HomeSection/>
            <CardView/>
            {/*<ItemSection/>*/}
            <Slider/>


        </>

    )


}

export default HomePage