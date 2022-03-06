import React from "react";
import '../../App.css';
import HomeSection from "../home/homeview/HomeSection";
import CardView from "../home/cards/CardView";
import ItemSection from "../home/item/ItemSection";

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