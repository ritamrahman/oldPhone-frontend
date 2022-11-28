import { useQuery } from "@tanstack/react-query";
import React from "react";
import { api } from "../../api/api";
import AdvertisedItems from "../../components/AdvertisedItems/AdvertisedItems";
import Categories from "../../components/Categories/Categories";
import CTA from "../../components/CTA/CTA";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  // query
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${api}/adproducts`);
      const data = await res.json();
      return data;
    },
  });
  console.log("Length", products.length);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Hero />
          {products?.product?.length > 0 && <AdvertisedItems productData={products} />}
          <Categories />
          <CTA />
        </>
      )}
    </div>
  );
};

export default Home;
