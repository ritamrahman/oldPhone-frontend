import React from "react";
import { useForm } from "react-hook-form";

const AddProductModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <input type="checkbox" id="addProductModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label htmlFor="addProductModal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-baseSecondary">
            ✕
          </label>

          {/* form start */}
          <div className="px-3">
            <h2 className="text-lg font-semibold text-baseSecondary capitalize text-center">Fill Product Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                {/* product name */}
                <div>
                  <label className="text-gray-700 dark:text-gray-200" for="productName">
                    Product Name
                  </label>
                  <input
                    {...register("exampleRequired", { required: true })}
                    id="productName"
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
                    id="price"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                {/* condition type */}
                <div>
                  <label className="text-gray-700 dark:text-gray-200" for="conditionType">
                    Condition Type
                  </label>
                  <input
                    id="conditionType"
                    type="conditionType"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  {errors.exampleRequired && <span>This field is required</span>}
                </div>
                {/* mobile number */}
                <div>
                  <label className="text-gray-700 dark:text-gray-200" for="mobileNumber">
                    Mobile Number
                  </label>
                  <input
                    id="mobileNumber"
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
                    id="location"
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
                    id="YearOfPurchase"
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
                  className="textarea textarea-bordered block w-full min-h-[200px] px-4 py-2 mt-2 text-gray-700 bg-primaryColor border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  placeholder="Bio"
                ></textarea>
              </div>
            </form>
          </div>
          {/* form end */}

          <div className="modal-action">
            <label type="Submit" className="btn bg-baseSecondary">
              Submit
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductModal;
