import React from "react";
import HomeSection from "../component/home/imgSection/HomeSection";
import CardView from "../component/home/cardItem/CardView";
import Slider from "../component/home/slider/Slider";

function HomePage() {
  return (
    <>
      <HomeSection />
      <CardView />
      {/*<ItemSection/>*/}
      <Slider />
    </>
  );
}

export default HomePage;
