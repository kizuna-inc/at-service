import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "../pages/Home";

import { Login } from "../pages/Login";
import { ForgotPassword } from "../pages/ForgotPassword";

import { dashboardRouter } from "./dashboard";

const routeController = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  ...dashboardRouter,
  {
    path: "/*",
    element: <HomePage />,
  },
]);

export const Router = () => {
  return <RouterProvider router={routeController} />;
};
