import { createBrowserRouter } from "react-router-dom";

import Main from "../components/Layout/Main";
import Categories from "../pages/Categories/Categories";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

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
        element: <Categories />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/login",
        element: <ProductDetails />,
      },
      {
        path: "/signup",
        element: <ProductDetails />,
      },
    ],
  },
]);
