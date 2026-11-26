import {
  BarChart2,
  BookOpen,
  Calendar,
  ClipboardCheck,
  LayoutDashboard,
  Settings,
  User,
  Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet } from "react-router-dom";

import { useDashboardUser } from ".";
import { DashboardSidebar, type SidebarMenuItem } from "./DashboardSidebar";

export const StaffDashboard = () => {
  const { t } = useTranslation();
  const user = useDashboardUser();

  if (user.detail.role !== "staff") {
    return <Navigate to={`/dashboard/${user.detail.role}`} replace />;
  }

  const menuItems: SidebarMenuItem[] = [
    {
      to: "/dashboard/staff",
      end: true,
      label: t("dashboard.staff.menu.overview"),
      icon: LayoutDashboard,
    },
    {
      to: "/dashboard/staff/queue",
      label: t("dashboard.staff.menu.queue"),
      icon: ClipboardCheck,
    },
    {
      to: "/dashboard/staff/repairs",
      label: t("dashboard.staff.menu.repairs"),
      icon: Wrench,
    },
    {
      to: "/dashboard/staff/schedule",
      label: t("dashboard.staff.menu.schedule"),
      icon: Calendar,
    },
    {
      to: "/dashboard/staff/knowledge",
      label: t("dashboard.staff.menu.knowledge"),
      icon: BookOpen,
    },
    {
      to: "/dashboard/staff/reports",
      label: t("dashboard.staff.menu.reports"),
      icon: BarChart2,
    },
    {
      to: "/dashboard/staff/profile",
      label: t("dashboard.staff.menu.profile"),
      icon: User,
    },
    {
      to: "/dashboard/staff/settings",
      label: t("dashboard.staff.menu.settings"),
      icon: Settings,
    },
  ];

  return (
    <div className="items-start gap-6 grid grid-cols-1 lg:grid-cols-[260px_1fr]">
      <DashboardSidebar
        ariaLabel={t("dashboard.staff.menu.ariaLabel")}
        items={menuItems}
        helpTitle={t("dashboard.staff.menu.helpTitle")}
        helpLine1={t("dashboard.staff.menu.helpPhone")}
        helpLine2={t("dashboard.staff.menu.helpHours")}
      />

      <div>
        <Outlet context={user} />
      </div>
    </div>
  );
};
