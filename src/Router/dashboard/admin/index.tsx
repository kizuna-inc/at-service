import type { RouteObject } from "react-router-dom";

import { AdminDashboard } from "@/pages/Dashboard/AdminDashboard";
import { AdminOverviewView } from "@/pages/Dashboard/admin/overview";
import { UsersView } from "@/pages/Dashboard/admin/users";
import { StaffView } from "@/pages/Dashboard/admin/staff";
import { DevicesView } from "@/pages/Dashboard/admin/devices";
import { AdminReportsView } from "@/pages/Dashboard/admin/reports";

import { KnowledgeView } from "@/pages/Dashboard/user/knowledge";
import { KnowledgeArticleView } from "@/pages/Dashboard/user/knowledge/ArticleView";
import { NewArticleView } from "@/pages/Dashboard/user/knowledge/NewArticleView";
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
      { path: "knowledge", element: <KnowledgeView /> },
      { path: "knowledge/new", element: <NewArticleView /> },
      { path: "knowledge/:articleId", element: <KnowledgeArticleView /> },
      { path: "reports", element: <AdminReportsView /> },
      { path: "settings", element: <SettingsView /> },
    ],
  },
];
