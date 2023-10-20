import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authprovider from "./Provider/Authprovider.jsx";
import Home from "./Components/Home.jsx";
import Description from "./Components/Description/Description.jsx";
import Addproduct from "./Components/Add/Addproduct.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import ErrorElement from "./Components/Error/ErrorElement.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import BrandProducts from "./Components/BrandProducts/BrandProducts.jsx";
import Details from "./Components/Details/Details.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Update from "./Components/Update/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/description",
        element: <Description></Description>,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Addproduct></Addproduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/brandProducts/:brand",
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) =>
          fetch(`https://automative-server-1xztbl6tl-raians-projects.vercel.app/cars/${params.brand}`),
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://automative-server-1xztbl6tl-raians-projects.vercel.app/cars/${params.id}`),
      },

      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://automative-server-1xztbl6tl-raians-projects.vercel.app/carts"
          ),
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`https://automative-server-1xztbl6tl-raians-projects.vercel.app/cars/${params.id}`),
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>
);
