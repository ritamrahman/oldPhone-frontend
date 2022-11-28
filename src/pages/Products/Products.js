import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import ProductCard from "../../components/Cards/ProductCard";
import AddProductModal from "../../components/Modal/AddProductModal";
import { AuthContext } from "../../contexts/AuthProvider";

const Products = () => {
  const { id } = useParams();
  // query
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${api}/products/${id}`);
      const data = await res.json();
      return data;
    },
  });
  // console.log("Details", products);

  return isLoading ? (
    "Loading"
  ) : (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-baseSecondary uppercase lg:text-4xl">Vivo</h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">Total Products - 221</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products?.product?.map((item) => (
            <ProductCard productData={item} key={item._id} />
          ))}
        </div>
        <AddProductModal />
      </div>
    </section>
  );
};

export default Products;
