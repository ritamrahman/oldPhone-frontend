import React from "react";
import AdvertisedItems from "../../components/AdvertisedItems/AdvertisedItems";
import Categories from "../../components/Categories/Categories";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <AdvertisedItems />
      <Categories />
    </div>
  );
};

export default Home;
