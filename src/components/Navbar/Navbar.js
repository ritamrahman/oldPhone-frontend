import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import axios from "axios";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [CurrUser, setCurrUser] = useState();
  // handleLogOut
  const handleLogOut = () => {
    logOut()
      .then(() => {
        user?.uid && toast.success("Logout successful");
        localStorage.removeItem("user");
        localStorage.removeItem("isAdmin");
      })
      .catch((error) => console.error(error));
  };

  // query
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

  // console.log(CurrUser);

  return (
    <div className="bg-primaryColor dark:bg-midnight F z-10 w-full">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <label htmlFor="my-drawer-2" className="lg:hidden">
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
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </label>
          {/* logo start */}
          <NavLink to="/" aria-label="Company" title="Company" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase text-gs">Old-Phone</span>
          </NavLink>
          {/* logo end */}
          {/* desktop menu start */}
          <ul className=" items-center hidden space-x-8 lg:flex">
            <MenuItems handleLogOut={handleLogOut} user={user} loading={loading} CurrUser={CurrUser} />
          </ul>
          {/* desktop menu end */}

          {/* mobile menu start */}
          <div className="lg:hidden">
            <div className="flex justify-between items-center">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                  <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                  <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <>
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-primaryColor dark:bg-midnight border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {/* logo start */}
                        <NavLink to="/" aria-label="Company" title="Company" className="inline-flex items-center">
                          <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase text-gs">
                            Old-Phone
                          </span>
                        </NavLink>
                        {/* logo end */}
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <MenuItems handleLogOut={handleLogOut} user={user} loading={loading} />
                      </ul>
                    </nav>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* mobile menu end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
