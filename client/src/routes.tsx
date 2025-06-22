import { createBrowserRouter } from "react-router";
import Layout from "@components/Layout";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import Diary from "@pages/Diary";
import AddDiary from "@pages/AddDiary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "diary",
        element: <Diary />,
      },
      {
        path: "diary/add",
        element: <AddDiary />,
      },
    ],
  },
]);

export default router;
