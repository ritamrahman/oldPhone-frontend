import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [condition, setCondition] = useState("Select One");
  const [active, setActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const price = form.price.value;
    // const conditionType = form.conditionType.value;
    const mobileNumber = form.mobileNumber.value;
    const location = form.location.value;
    const YearOfPurchase = form.YearOfPurchase.value;
    const description = form.description.value;

    // console.log(productName, price, conditionType, mobileNumber, location, YearOfPurchase, description);

    const formData = {
      productName: productName,
      price: price,
      conditionType: condition,
      mobileNumber: mobileNumber,
      location: location,
      YearOfPurchase: YearOfPurchase,
      description: description,
    };
    console.log(formData);
  };
  return (
    <>
      {/* form start */}
      <div className="px-3 max-w-6xl mx-auto mt-11">
        <h2 className="text-lg font-semibold text-baseSecondary capitalize text-center">Fill Product Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* product name */}
            <div>
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
            {/* price */}
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="price">
                Price
              </label>
              <input
                required
                id="price"
                name="price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* condition type */}
            <div className="flex-col">
              <label className="text-gray-700 dark:text-gray-200" for="conditionType">
                Condition Type
              </label>
              {/* <input
                  required
                    id="conditionType"
                    name="conditionType"
                    type="conditionType"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  /> */}
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1">
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
          </div>
          {/* description */}
          <div>
            <label className="text-gray-700 dark:text-gray-200" for="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="textarea textarea-bordered block w-full min-h-[200px] px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Bio"
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
