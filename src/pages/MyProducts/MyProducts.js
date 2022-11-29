import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { api } from "../../api/api";
import Loading from "../../components/Loading/Loading";
import toast from "react-hot-toast";
import { async } from "@firebase/util";

const MyProducts = () => {
  const userEmail = JSON.parse(localStorage.getItem("user"));

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState();
  const [refatch, setRefatch] = useState(false);

  console.log("products", products);

  // call review api
  useEffect(() => {
    setIsLoading(true);

    fetch(`${api}/myproducts/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        setRefatch(false);
      })
      .catch((er) => console.error(er));
  }, [userEmail, refatch]);

  // advertiseHandler
  const advertiseHandler = async (adId) => {
    const formData = {
      isAdvertise: true,
    };
    // save  information to the database
    fetch(`${api}/product/${adId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("your product show on home page now");
        setRefatch(true);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {products?.product?.length === 0 ? (
            "no products fount"
          ) : (
            <>
              <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">My Products</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <colgroup>
                      <col />
                      <col />
                      <col className="w-24" />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                      {/* // name,sales status (available or sold), price,delete ,sold,advertise */}
                      <tr className="text-left text-secondary bg-secondaryBG">
                        <th className="p-3">Name</th>
                        <th className="p-3">price</th>
                        <th className="p-3">status</th>
                        <th className="p-3 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <Loading />
                      ) : (
                        products?.product?.map((product) => (
                          <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <>
                              <td className="p-3">{product.title ? product.title : ""}</td>
                              <td className="p-3">{product.resalePrice ? product.resalePrice : ""}</td>

                              <td className="flex p-3 text-center">
                                {/* <button className="mx-2 capitalize">{product.isPayed === true ? "Sold" : "Online"}</button> */}
                                {product.isPayed === true ? (
                                  <button className="btn btn-xs bg-grayColor">sold</button>
                                ) : (
                                  <button className="uppercase">Online</button>
                                )}
                                <button className="mx-2 capitalize">
                                  {product.isAdvertise === true ? (
                                    <button className="btn btn-xs bg-grayColor text-blackColor">advertised</button>
                                  ) : (
                                    <button
                                      className="btn btn-xs uppercase bg-greenColor text-blackColor"
                                      onClick={() => advertiseHandler(product?._id)}
                                    >
                                      advertise
                                    </button>
                                  )}
                                </button>
                              </td>
                              <td className="">
                                {/* edit */}

                                {/* delete */}
                                <button className="btn btn-circle btn-outline btn-xs bg-baseSecondary text-primaryColor">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </td>
                            </>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default MyProducts;
