import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <>
      <li>
        <NavLink
          to="#categories"
          className="font-medium capitalize tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
        >
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-product"
          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-product"
          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
        >
          My Product
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/login"
          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
        >
          Login
        </NavLink>
      </li>
      <li>
        <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-baseSecondary text-primaryColor ">
          <Link to="/signup">Sign up</Link>
        </button>
      </li>

      <li className="cursor-pointer">LogOut</li>
    </>
  );
};

export default MenuItems;
