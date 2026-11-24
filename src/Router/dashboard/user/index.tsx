import type { RouteObject } from "react-router-dom";

import { UserDashboard } from "@/pages/Dashboard/UserDashboard";

import { UserHomeView } from "@/pages/Dashboard/user/home";
import { HelpRequestsView } from "@/pages/Dashboard/user/requests";
import { NewRequestView } from "@/pages/Dashboard/user/requests/NewRequestView";
import { HelpersView } from "@/pages/Dashboard/user/helpers";
import { KnowledgeArticleView } from "@/pages/Dashboard/user/knowledge/ArticleView";
import { KnowledgeView } from "@/pages/Dashboard/user/knowledge";
import { RepairServicesView } from "@/pages/Dashboard/user/repair";
import { ReportsView } from "@/pages/Dashboard/user/reports";
import { SettingsView } from "@/pages/Dashboard/user/settings";

export const userDashboardRoutes: RouteObject[] = [
  {
    path: "user",
    element: <UserDashboard />,
    children: [
      { index: true, element: <UserHomeView /> },
      { path: "requests", element: <HelpRequestsView /> },
      { path: "requests/new", element: <NewRequestView /> },
      { path: "repair", element: <RepairServicesView /> },
      { path: "helpers", element: <HelpersView /> },
      { path: "knowledge", element: <KnowledgeView /> },
      {
        path: "knowledge/:articleId",
        element: <KnowledgeArticleView />,
      },
      { path: "reports", element: <ReportsView /> },
      { path: "settings", element: <SettingsView /> },
    ],
  },
];
