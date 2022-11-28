import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import Loading from "../Loading/Loading";
import toast from "react-hot-toast";

const AddProductModal = ({ product }) => {
  const { user, loading } = useContext(AuthContext);
  console.log("product", product);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // const conditionType = form.conditionType.value;
    const mobileNumber = form.mobileNumber.value;
    const location = form.location.value;

    const formData = {
      userName: user.displayName,
      userEmail: user.email,
      productName: product.resalePrice,
      price: product.resalePrice,
      number: mobileNumber,
      location: location,
    };
    console.log(formData);

    fetch(`${api}/booking/${product._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("successfully");
        //  navigate("/dashboard/my-product");
        // form.reset();
        // setCondition("Select One");
        // setLocation("Select One");
        // setCategory("Select One");
      });
  };

  if (loading) {
    return "loading";
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <input type="checkbox" id="addProductModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <label
                htmlFor="addProductModal"
                className="btn btn-sm btn-circle absolute right-2 top-2 bg-baseSecondary"
              >
                ✕
              </label>

              {/* form start */}
              <div className="px-3">
                <h2 className="text-lg font-semibold text-baseSecondary capitalize text-center">
                  Fill Product Details
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    {/* name */}
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" for="name">
                        name
                      </label>
                      <input
                        readOnly
                        id="name"
                        name="name"
                        type="text"
                        defaultValue={user?.displayName}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    {/* email */}
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" for="email">
                        email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="text"
                        defaultValue={user?.email}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    {/* product name */}
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" for="productName">
                        Product Name
                      </label>
                      <input
                        id="productName"
                        name="productName"
                        type="text"
                        defaultValue={product?.title}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    {/* price */}
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" for="price">
                        price
                      </label>
                      <input
                        id="price"
                        name="price"
                        type="text"
                        defaultValue={product?.resalePrice}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    {/* mobile number */}
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" for="mobileNumber">
                        Mobile Number
                      </label>
                      <input
                        required
                        id="mobileNumber"
                        name="mobileNumber"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    {/* location */}
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" for="location">
                        Location
                      </label>
                      <input
                        required
                        id="location"
                        name="location"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  {/* <label htmlFor={modalAtr} type="Submit" className="btn bg-baseSecondary"> */}
                  <div className="flex justify-end">
                    <button className="btn mt-4 bg-baseSecondary">Booking</button>
                  </div>
                  {/* </label> */}
                </form>
              </div>
              {/* form end */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddProductModal;
