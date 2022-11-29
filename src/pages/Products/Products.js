import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import ProductCard from "../../components/Cards/ProductCard";
import Loading from "../../components/Loading/Loading";
import AddProductModal from "../../components/Modal/AddProductModal";
import { AuthContext } from "../../contexts/AuthProvider";

const Products = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // query
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      setIsLoading(true);
      const res = await fetch(`${api}/products/${id}`);
      const data = await res.json();
      setIsLoading(false);
      return data;
    },
  });
  // console.log("Details", products);

  return isLoading ? (
    <Loading />
  ) : (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-baseSecondary uppercase lg:text-4xl">Vivo</h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">Total Products - 221</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products?.product?.map((item) => (
            <>
              <ProductCard productData={item} key={item._id} />
              <AddProductModal product={item} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
