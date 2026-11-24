// import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { ProtectedRoute } from "@/components/ProtectedRoute";

import { DashboardMain, DashboardRedirect } from "@/pages/Dashboard";

import { userDashboardRoutes } from "./user";
import { staffDashboardRoutes } from "./staff";
import { adminDashboardRoutes } from "./admin";

export const dashboardRouter: RouteObject[] = [
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardMain />,
        children: [
          { index: true, element: <DashboardRedirect /> },
          ...userDashboardRoutes,
          ...staffDashboardRoutes,
          ...adminDashboardRoutes,
          { path: "*", element: <DashboardRedirect /> },
        ],
      },
    ],
  },
];
