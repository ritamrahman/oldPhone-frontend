import React from "react";
import ProductCard from "../../components/Cards/ProductCard";
import AddProductModal from "../../components/Modal/AddProductModal";

const Products = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-baseSecondary uppercase lg:text-4xl">Vivo</h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">Total Products - 221</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array(12)
            .fill()
            .map((item, index) => (
              <ProductCard index={index} key={index} />
            ))}
        </div>
        <AddProductModal />
      </div>
    </section>
  );
};

export default Products;
