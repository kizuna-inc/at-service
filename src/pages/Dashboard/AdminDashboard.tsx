import {
  BarChart3,
  BookOpen,
  Laptop,
  LayoutDashboard,
  Settings,
  UserCog,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet } from "react-router-dom";

import { useDashboardUser } from ".";
import { DashboardSidebar, type SidebarMenuItem } from "./DashboardSidebar";

export const AdminDashboard = () => {
  const { t } = useTranslation();
  const user = useDashboardUser();

  if (user.detail.role !== "admin") {
    return <Navigate to={`/dashboard/${user.detail.role}`} replace />;
  }

  const menuItems: SidebarMenuItem[] = [
    {
      to: "/dashboard/admin",
      end: true,
      label: t("dashboard.admin.menu.overview"),
      icon: LayoutDashboard,
    },
    {
      to: "/dashboard/admin/users",
      label: t("dashboard.admin.menu.users"),
      icon: Users,
    },
    {
      to: "/dashboard/admin/staff",
      label: t("dashboard.admin.menu.staff"),
      icon: UserCog,
    },
    {
      to: "/dashboard/admin/devices",
      label: t("dashboard.admin.menu.devices"),
      icon: Laptop,
    },
    {
      to: "/dashboard/admin/knowledge",
      label: t("dashboard.admin.menu.knowledge"),
      icon: BookOpen,
    },
    {
      to: "/dashboard/admin/reports",
      label: t("dashboard.admin.menu.reports"),
      icon: BarChart3,
    },
    {
      to: "/dashboard/admin/settings",
      label: t("dashboard.admin.menu.settings"),
      icon: Settings,
    },
  ];

  return (
    <div className="items-start gap-6 grid grid-cols-1 lg:grid-cols-[260px_1fr]">
      <DashboardSidebar
        ariaLabel={t("dashboard.admin.menu.ariaLabel")}
        items={menuItems}
        helpTitle={t("dashboard.admin.menu.helpTitle")}
        helpLine1={t("dashboard.admin.menu.helpPhone")}
        helpLine2={t("dashboard.admin.menu.helpHours")}
      />

      <div>
        <Outlet context={user} />
      </div>
    </div>
  );
};
