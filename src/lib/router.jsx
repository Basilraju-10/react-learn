import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  { 
    path: "posts",
    element: <Posts />,

  },
  { 
    path: "posts/:id",
    element: <Details />,

  }
]);
export default router;