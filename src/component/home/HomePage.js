import React from "react";
import '../../App.css'
import HomeSection from "./homeview/HomeSection";
import CardView from "./cards/CardView";
import ItemSection from "./item/ItemSection";
import Footer from "../footer/Footer";



function HomePage(){
    return(
        <>
            <HomeSection/>
            <CardView/>
            <ItemSection/>
            <Footer/>

        </>

    )


}

export default HomePage