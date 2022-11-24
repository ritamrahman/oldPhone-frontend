import React from "react";
import ProductCard from "../Cards/ProductCard";

const AdvertisedItems = () => {
  return (
    <section class="bg-white text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl text-baseSecondary">Advertised items</h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array(4)
            .fill()
            .map((item, index) => (
              <ProductCard index={index} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisedItems;
