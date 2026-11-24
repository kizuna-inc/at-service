import type { RouteObject } from "react-router-dom";

import { AdminDashboard } from "@/pages/Dashboard/AdminDashboard";
import { AdminOverviewView } from "@/pages/Dashboard/admin/overview";
import { UsersView } from "@/pages/Dashboard/admin/users";
import { StaffView } from "@/pages/Dashboard/admin/staff";
import { DevicesView } from "@/pages/Dashboard/admin/devices";
import { AdminReportsView } from "@/pages/Dashboard/admin/reports";

import { SettingsView } from "@/pages/Dashboard/user/settings";

export const adminDashboardRoutes: RouteObject[] = [
  {
    path: "admin",
    element: <AdminDashboard />,
    children: [
      { index: true, element: <AdminOverviewView /> },
      { path: "users", element: <UsersView /> },
      { path: "staff", element: <StaffView /> },
      { path: "devices", element: <DevicesView /> },
      { path: "reports", element: <AdminReportsView /> },
      { path: "settings", element: <SettingsView /> },
    ],
  },
];
