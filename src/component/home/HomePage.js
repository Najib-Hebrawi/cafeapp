import React from "react";
import '../../App.css'
import HomeSection from "./homeview/HomeSection";
import CardView from "./cards/CardView";
import ItemSection from "./item/ItemSection";


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