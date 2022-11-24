import React from "react";
import AdvertisedItems from "../../components/AdvertisedItems/AdvertisedItems";
import Categories from "../../components/Categories/Categories";
import CTA from "../../components/CTA/CTA";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <AdvertisedItems />
      <Categories />
      <CTA />
    </div>
  );
};

export default Home;
