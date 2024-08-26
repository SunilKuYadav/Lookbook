import { createBrowserRouter } from "react-router-dom";

import { ErrorPage, Looks, Product } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Looks />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
