import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="w-full pt-20 bg-white dark:bg-midnight"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Main;
