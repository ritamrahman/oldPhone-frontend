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
        element: <MyProducts />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/my-product",
        element: <MyProducts />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
