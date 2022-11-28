import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { api } from "../../api/api";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);
  const userEmail = JSON.parse(localStorage.getItem("user"));
  const url = `${api}/myproducts/${userEmail}`;
  console.log(url);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      if (loading || !user) {
        return "loading...";
      }
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data);
      return data;
    },
  });
  console.log("products", products.product);

  return (
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
              {loading
                ? "Loading..."
                : products?.product?.map((product) => (
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
                              <button className="btn btn-xs bg-grayColor">advertised</button>
                            ) : (
                              <button className="btn btn-xs uppercase bg-greenColor text-blackColor">advertise</button>
                            )}
                          </button>
                        </td>
                        <td className="">
                          {/* edit */}
                          <button className="btn btn-circle btn-outline btn-xs bg-baseSecondary text-primaryColor">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
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
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
