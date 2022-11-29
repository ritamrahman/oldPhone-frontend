import { createBrowserRouter } from "react-router-dom";

import Main from "../components/Layout/Main";
import Products from "../pages/Products/Products";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Signup from "../pages/Signup/Signup";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyProducts from "../pages/MyProducts/MyProducts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../components/Layout/DashboardLayout";
import AllSeller from "../pages/AllSeller/AllSeller";
import MyOrders from "../pages/MyOrders/MyOrders";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoutes from "./PrivateRoute";
import AllBookings from "../pages/Buyers/Buyers";
import Buyers from "../pages/Buyers/Buyers";
import AllBuyers from "../pages/Buyers/AllBuyers";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoutes>
            <MyOrders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  // dashboard
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <MyProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/buyers",
        element: (
          <PrivateRoutes>
            <Buyers />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/sellers",
        element: (
          <PrivateRoutes>
            <AllSeller />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/my-product",
        element: (
          <PrivateRoutes>
            <MyProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: <AllSeller />,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
