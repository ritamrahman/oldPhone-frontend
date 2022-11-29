import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/AuthProvider";
import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [CurrUser, setCurrUser] = useState();
  // call review api
  useEffect(() => {
    setIsLoading(true);

    fetch(`${api}/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrUser(data);
        setIsLoading(false);
      })
      .catch((er) => console.error(er));
  }, [user?.email]);

  console.log("CurrUser", CurrUser);

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
            {CurrUser?.user?.role === "seller" ||
              ("admin" && (
                <>
                  <li>
                    <Link to="/dashboard/add-product">Add product</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/my-product">My Products</Link>
                  </li>
                </>
              ))}
            {CurrUser?.user?.role === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/buyers">My buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/sellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link>Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
