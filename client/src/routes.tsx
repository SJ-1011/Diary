import { createBrowserRouter } from "react-router";
import Layout from "@components/Layout";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
