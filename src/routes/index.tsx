import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NewArrivals from "../pages/products/NewArrivals";
import About from "../pages/personal/About";
import Contact from "../pages/personal/Contact";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/new-arrivals",
        element: <NewArrivals />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

export default  router;