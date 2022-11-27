import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [condition, setCondition] = useState("Select One");
  const [location, setLocation] = useState("Select One");
  const [category, setCategory] = useState("Select One");

  const navigate = useNavigate();

  const [isProductAdded, setIsProductAdded] = useState(false);

  const { user, loading } = useContext(AuthContext);

  // const imageHostKey = process.env.REACT_APP_imgbb_key; //imagebb api key
  // const imageHostKey = "e95a4edaba3a92615d8b04b38552c158"; //imagebb api key

  const locations = [
    { name: "Barisal" },
    { name: "Chittagong" },
    { name: "Dhaka" },
    { name: "Khulna" },
    { name: "Mymensingh" },
    { name: "Rajshahi" },
    { name: "Rangpur" },
    { name: "Sylhet" },
  ];

  // query
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${api}/categories`);
      const data = await res.json();
      return data;
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const productName = form.productName.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const image = form.image.value;
    const mobileNumber = form.mobileNumber.value;
    const YearOfPurchase = form.YearOfPurchase.value;
    const description = form.description.value;

    const formData = {
      title: productName,
      category: category,
      image: image,
      location: location,
      originalPrice: originalPrice,
      resalePrice: resalePrice,
      yearsOfUse: YearOfPurchase,
      condition: condition,
      number: mobileNumber,
      description: description,
    };

    // const result = await axios.post(`${api}/product/${user.email}`, { formData }, config);
    // save  information to the database
    fetch(`${api}/product/${user.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("product added successfully");
        navigate("/dashboard/my-product");
        // form.reset();
        // setCondition("Select One");
        // setLocation("Select One");
        // setCategory("Select One");
      });
  };

  if (isLoading) {
    return "loading...";
  }
  return (
    <>
      {/* form start */}
      <div className="px-3 max-w-6xl mx-auto mt-11">
        <h2 className="text-lg font-semibold text-baseSecondary capitalize text-center">Fill Product Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            {/* product name */}
            <div className="">
              <label className="text-gray-700 dark:text-gray-200" for="productName">
                Product Name
              </label>
              <input
                required
                id="productName"
                name="productName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* original price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <span>original price</span>
                <input
                  type="text"
                  id="price"
                  name="originalPrice"
                  placeholder="10"
                  className="input input-bordered w-full"
                />
                <span>USD</span>
              </label>
            </div>
            {/* resale price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <span>resale price</span>
                <input
                  type="text"
                  id="price"
                  name="resalePrice"
                  placeholder="10"
                  className="input input-bordered w-full"
                />
                <span>USD</span>
              </label>
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
            <div className="flex flex-col">
              <label className="text-gray-700 dark:text-gray-200" for="conditionType">
                Location
              </label>
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1 bg-primaryColor w-full text-blackColor">
                  {location}
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  {locations?.map((location, id) => (
                    <li>
                      <Link className="capitalize" key={id} onClick={() => setLocation(location.name)}>
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Year of purchase */}
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="YearOfPurchase">
                Year of purchase
              </label>
              <input
                required
                id="YearOfPurchase"
                name="YearOfPurchase"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* image */}
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="YearOfPurchase">
                Image
              </label>
              <input
                required
                id="image"
                name="image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* category */}
            <div className="flex flex-col">
              <label className="text-gray-700 dark:text-gray-200" for="conditionType">
                category
              </label>
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1 bg-primaryColor w-full text-blackColor">
                  {category}
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  {categories?.category?.map((category) => (
                    <li>
                      <Link className="capitalize" key={category._id} onClick={() => setCategory(category._id)}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* condition type */}
            <div className="flex flex-col">
              <label className="text-gray-700 dark:text-gray-200" for="conditionType">
                Condition Type
              </label>
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1 bg-primaryColor w-full text-blackColor">
                  {condition}
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link className="capitalize" onClick={() => setCondition("excellent")}>
                      excellent
                    </Link>
                  </li>
                  <li>
                    <Link className="capitalize" onClick={() => setCondition("good")}>
                      good
                    </Link>
                  </li>
                  <li>
                    <Link className="capitalize" onClick={() => setCondition("fair")}>
                      fair
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* description */}
          <div className="mt-10">
            <label className="text-gray-700 dark:text-gray-200" for="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="textarea textarea-bordered block w-full min-h-[200px] px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="description"
            ></textarea>
          </div>

          {/* <label htmlFor={modalAtr} type="Submit" className="btn bg-baseSecondary"> */}
          <div className="flex justify-end">
            <button className="btn mt-4 bg-baseSecondary">Submit</button>
          </div>
          {/* </label> */}
        </form>
      </div>
      {/* form end */}
    </>
  );
};

export default AddProduct;
