import {
  BarChart2,
  BookOpen,
  FileText,
  Home,
  Settings,
  Users,
  Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet } from "react-router-dom";

import { useDashboardUser } from ".";
import { DashboardSidebar, type SidebarMenuItem } from "./DashboardSidebar";

export const UserDashboard = () => {
  const { t } = useTranslation();
  const user = useDashboardUser();

  if (user.detail.role !== "user") {
    return <Navigate to={`/dashboard/${user.detail.role}`} replace />;
  }

  const menuItems: SidebarMenuItem[] = [
    {
      to: "/dashboard/user",
      end: true,
      label: t("dashboard.user.menu.home"),
      icon: Home,
    },
    {
      to: "/dashboard/user/requests",
      label: t("dashboard.user.menu.requests"),
      icon: FileText,
    },
    {
      to: "/dashboard/user/repair",
      label: t("dashboard.user.menu.repair"),
      icon: Wrench,
    },
    {
      to: "/dashboard/user/helpers",
      label: t("dashboard.user.menu.helpers"),
      icon: Users,
    },
    {
      to: "/dashboard/user/knowledge",
      label: t("dashboard.user.menu.knowledge"),
      icon: BookOpen,
    },
    {
      to: "/dashboard/user/reports",
      label: t("dashboard.user.menu.reports"),
      icon: BarChart2,
    },
    {
      to: "/dashboard/user/settings",
      label: t("dashboard.user.menu.settings"),
      icon: Settings,
    },
  ];

  return (
    <div className="items-start gap-6 grid grid-cols-1 lg:grid-cols-[260px_1fr]">
      <DashboardSidebar
        ariaLabel={t("dashboard.user.menu.ariaLabel")}
        items={menuItems}
        helpTitle={t("dashboard.user.menu.helpTitle")}
        helpLine1={t("dashboard.user.menu.helpPhone")}
        helpLine2={t("dashboard.user.menu.helpHours")}
      />
      <div>
        <Outlet context={user} />
      </div>
    </div>
  );
};
