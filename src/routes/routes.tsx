import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home/Home";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";

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
        path: "product-management",
        element: <ProductManagement />,
      },
    ],
  },
]);
