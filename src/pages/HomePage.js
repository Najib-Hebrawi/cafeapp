import React from "react";
import HomeSection from "../component/1_home/imgSection/HomeSection";
import CardView from "../component/1_home/cardItem/CardView";
import Slider from "../component/1_home/slider/Slider";

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