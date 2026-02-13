import React from "react";
import Hero from "../component/Hero/Hero";
import Popular from "../component/popular/Popular";
import Offer from "../component/offer/Offer";
import NewCollection from '../component/NewCollection/NewCollection'
import Newsletter from "../component/newsletter/Newsletter";
// import Footer from "../component/footer/Footer";


const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer/>
      <NewCollection/>
      <Newsletter/>
     
    </div>
  );
};

export default Shop;
