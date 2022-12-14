import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { api } from "../../api/api";

const MenuItems = ({ handleLogOut, user, loading, CurrUser }) => {
  const [condition, setCondition] = useState("Buyer");
  // const { user } = useContext(AuthContext);

  return (
    <>
      {!loading && user?.uid && (
        <li>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              {condition}
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link className="capitalize" onClick={() => setCondition("seller")}>
                  seller
                </Link>
              </li>
              <li>
                <Link className="capitalize" onClick={() => setCondition("buyer")}>
                  Buyer
                </Link>
              </li>
              <li>
                <Link className="capitalize" onClick={() => setCondition("admin")}>
                  admin
                </Link>
              </li>
            </ul>
          </div>
        </li>
      )}

      <li>
        <NavLink
          to="/blogs"
          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
        >
          Blogs
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to="/my-orders"
              className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
            >
              My Orders
            </NavLink>
          </li>
          {CurrUser?.user?.role === "seller" ||
            ("admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            ))}

          <li className="cursor-pointer" onClick={handleLogOut}>
            LogOut
          </li>
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default MenuItems;
