import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productData, setProductData }) => {
  const time = productData?.createdAt.split("T");
  console.log("productData", productData);
  return (
    <div className="shadow-md bg-primaryColor">
      <img alt="Toy" src={productData?.image} className="h-56 w-full object-cover lg:h-72 " />

      <div className="p-6">
        {productData?.isAdvertise === true && (
          <strong className="inline-block bg-baseSecondary text-primaryColor px-3 py-1 text-xs font-medium rounded-md">
            Advertised
          </strong>
        )}

        <div className="mt-2">
          <dl>
            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                className="h-4 w-4 text-baseSecondary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <div className="mt-1.5 sm:ml-3 sm:mt-0 flex items-center">
                <p className="text-gray-500 mr-1">{productData?.SellerName?.name}</p>
                {productData?.SellerName?.isVerified === true && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-blueColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* title */}
            <div className="flex mt-2 items-center">
              <dd className="font-medium">{productData?.title}</dd>
            </div>
            {/* price */}
            <div className="mt-5 flex-row justify-around lg:flex md:flex xl:flex">
              <p>
                Original Price: <span className="text-baseSecondary">{productData?.originalPrice}</span>
              </p>
              <span className="text-baseSecondary hidden lg:block md:block xl:block">|</span>
              <p>
                Resale Price: <span className="text-baseSecondary">{productData?.resalePrice}</span>
              </p>
            </div>
            {/* location */}
            <div className="mt-4 items-center sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-baseSecondary"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <dd className="font-normal">{productData?.location}</dd>
            </div>
          </dl>
          {/* option start */}
          <div className="mt-6 flex items-center gap-8 text-xs">
            {/* use */}
            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                className="h-4 w-4 text-baseSecondary font-extraboldbold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-gray-500">Use</p>

                <p className="font-medium">{productData?.yearsOfUse} Years</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                className="h-4 w-4 text-baseSecondary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-gray-500">Posted On</p>

                <p className="font-medium uppercase">{time[0]}</p>
              </div>
            </div>
          </div>
          {/* option end */}
        </div>

        <div className="w-full flex justify-between items-center mt-4 ">
          <label
            onClick={() => setProductData(productData)}
            htmlFor="addProductModal"
            className="block w-full text-center bg-secondaryColor text-primaryColor p-4 text-sm font-medium rounded-md"
          >
            Book now
          </label>
          <button type="button" className="rounded-full flex-1 p-2 text-white bg-primaryColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ProductCard;
