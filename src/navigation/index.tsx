import { createBrowserRouter } from "react-router-dom";

import { ErrorPage, Looks, Product } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/looks/:id",
    element: <Looks />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
