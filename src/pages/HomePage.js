import React from "react";
import '../App.css';
import HomeSection from "../component/home/homeview/HomeSection";
import CardView from "../component/home/cards/CardView";
import ItemSection from "../component/home/item/ItemSection";

function HomePage(){
    return(
        <>
            <HomeSection/>
            <CardView/>
            <ItemSection/>


        </>

    )


}

export default HomePage