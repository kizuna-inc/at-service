import type { RouteObject } from "react-router-dom";

import { StaffDashboard } from "@/pages/Dashboard/StaffDashboard";
import { StaffOverviewView } from "@/pages/Dashboard/staff/overview";
import { StaffQueueView } from "@/pages/Dashboard/staff/queue";
import { StaffRepairsView } from "@/pages/Dashboard/staff/repairs";
import { StaffScheduleView } from "@/pages/Dashboard/staff/schedule";
import { StaffReportsView } from "@/pages/Dashboard/staff/reports";

import { KnowledgeView } from "@/pages/Dashboard/user/knowledge";
import { KnowledgeArticleView } from "@/pages/Dashboard/user/knowledge/ArticleView";
import { NewArticleView } from "@/pages/Dashboard/user/knowledge/NewArticleView";
import { SettingsView } from "@/pages/Dashboard/user/settings";

export const staffDashboardRoutes: RouteObject[] = [
  {
    path: "staff",
    element: <StaffDashboard />,
    children: [
      { index: true, element: <StaffOverviewView /> },
      { path: "queue", element: <StaffQueueView /> },
      { path: "repairs", element: <StaffRepairsView /> },
      { path: "schedule", element: <StaffScheduleView /> },
      { path: "knowledge", element: <KnowledgeView /> },
      { path: "knowledge/new", element: <NewArticleView /> },
      { path: "knowledge/:articleId", element: <KnowledgeArticleView /> },
      { path: "reports", element: <StaffReportsView /> },
      { path: "settings", element: <SettingsView /> },
    ],
  },
];
