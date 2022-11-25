import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  py-8">
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-primaryColor">
            <li>
              <Link to="/dashboard/add-product">Add product</Link>
            </li>
            <li>
              <Link to="/dashboard/my-product">My Products</Link>
            </li>
            <li>
              <Link>My buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/all-sellers">All Sellers</Link>
            </li>
            <li>
              <Link>All Buyers</Link>
            </li>
            <li>
              <Link>Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
