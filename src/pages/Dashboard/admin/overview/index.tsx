import {
  Activity,
  BarChart3,
  ClipboardList,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useDashboardUser } from "../..";

type OverviewStatus = "active" | "pending" | "completed";

const STATUS_BADGE_MAP: Record<OverviewStatus, string> = {
  active: "bg-success-bg text-success-text",
  pending: "bg-warning-bg text-warning-text border border-warning-border",
  completed: "bg-success-bg text-success-text",
};

export const AdminOverviewView = () => {
  const { t } = useTranslation();
  const user = useDashboardUser();
  const navigate = useNavigate();

  const stats = [
    {
      label: t("dashboard.admin.stats.totalUsers"),
      value: "128",
      icon: Users,
      iconBg: "bg-primary-light text-primary",
    },
    {
      label: t("dashboard.admin.stats.activeStaff"),
      value: "14",
      icon: UserCog,
      iconBg: "bg-info-bg text-info-text",
    },
    {
      label: t("dashboard.admin.stats.openRequests"),
      value: "19",
      icon: ClipboardList,
      iconBg: "bg-warning-bg text-warning-text",
    },
    {
      label: t("dashboard.admin.stats.systemStatus"),
      value: t("dashboard.admin.stats.operational"),
      icon: Activity,
      iconBg: "bg-success-bg text-success-text",
    },
  ];

  const overviewItems: {
    key: "item1" | "item2" | "item3";
    status: OverviewStatus;
  }[] = [
    { key: "item1", status: "active" },
    { key: "item2", status: "pending" },
    { key: "item3", status: "completed" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2.5">
          <h1 className="font-bold text-text-primary text-2xl">
            {t("dashboard.welcome", { name: user.detail.name })}
          </h1>
          <span className="bg-primary-light px-2.5 py-0.5 border border-primary-border rounded-full font-medium text-primary text-xs">
            {t(`roles.${user.detail.role}`)}
          </span>
        </div>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.admin.subtitle")}
        </p>
      </div>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.label}
              className="bg-bg-surface shadow-card border border-border"
            >
              <CardContent className="flex justify-between items-center py-2">
                <div>
                  <p className="text-text-muted text-xs">{stat.label}</p>
                  <p className="mt-1 font-bold text-text-primary text-xl">
                    {stat.value}
                  </p>
                </div>
                <span
                  className={`flex justify-center items-center rounded-lg size-10 ${stat.iconBg}`}
                >
                  <Icon className="size-5" />
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        <Card className="bg-bg-surface shadow-card border border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-semibold text-text-primary text-base">
              <ShieldCheck className="size-4 text-primary" />
              <span>{t("dashboard.admin.managementTitle")}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <Button
              type="button"
              onClick={() => navigate("/dashboard/admin/users")}
              className="justify-start bg-primary hover:bg-primary-hover w-full text-text-inverse cursor-pointer"
            >
              <Users className="size-4" />
              <span>{t("dashboard.admin.actionUsers")}</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard/admin/staff")}
              className="justify-start hover:bg-primary-light border-border-input w-full text-text-primary cursor-pointer"
            >
              <UserCog className="size-4" />
              <span>{t("dashboard.admin.actionStaff")}</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard/admin/reports")}
              className="justify-start hover:bg-primary-light border-border-input w-full text-text-primary cursor-pointer"
            >
              <BarChart3 className="size-4" />
              <span>{t("dashboard.admin.actionReports")}</span>
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-bg-surface shadow-card border border-border">
          <CardHeader>
            <CardTitle className="font-semibold text-text-primary text-base">
              {t("dashboard.admin.overviewTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {overviewItems.map((item) => (
              <div
                key={item.key}
                className="flex flex-wrap justify-between items-center gap-2 bg-bg-subtle/60 px-3.5 py-2.5 border border-border rounded-lg"
              >
                <div>
                  <p className="font-medium text-text-primary text-sm">
                    {t(`dashboard.admin.overviewItems.${item.key}.title`)}
                  </p>
                  <p className="text-text-muted text-xs">
                    {t(`dashboard.admin.overviewItems.${item.key}.meta`)}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${STATUS_BADGE_MAP[item.status]}`}
                >
                  {t(`dashboard.status.${item.status}`)}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
