import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  console.log(category);
  return (
    <Link to={`/category/${category._id}`}>
      <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div
          className="w-1/3 bg-cover"
          style={{
            backgroundImage: `url(${category.image})`,
          }}
        />
        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-2xl font-bold text-baseSecondary">{category.title}</h1>
          {/* <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Total Product - {category.length}</p> */}

          <div className="flex justify-end mt-3 item-center">
            <button className="flex items-center px-2 py-1 text-xs font-bold text-primaryColor uppercase transition-colors duration-300 transform bg-baseSecondary rounded  hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              Show
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-primaryColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
