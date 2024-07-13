import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home/Home";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Product from "@/pages/Product/Product";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import Checkout from "@/pages/Checkout/Checkout";
import Carts from "@/pages/Carts/Carts";
import AboutUs from "@/pages/About/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "checkout/:id",
        element: <Checkout />,
      },
      {
        path: "product-management",
        element: <ProductManagement />,
      },
      {
        path: "cart",
        element: <Carts />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
]);
