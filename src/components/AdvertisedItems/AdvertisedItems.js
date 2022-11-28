import { useQuery } from "@tanstack/react-query";
import React from "react";
import { api } from "../../api/api";
import ProductCard from "../Cards/ProductCard";
import AddProductModal from "../Modal/AddProductModal";

const AdvertisedItems = ({ productData }) => {
  return (
    <section className="bg-white text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-baseSecondary">Advertised items</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productData?.product?.map((item) => (
            <ProductCard productData={item} key={item._id} />
          ))}
        </div>
        <AddProductModal />
      </div>
    </section>
  );
};

export default AdvertisedItems;
