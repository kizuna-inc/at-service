import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui/card";
import { getStaffOverview } from "@/modules/api/mock/dashboard";
import type { StaffOverviewData } from "@/modules/interface/api/dashboard";

import { useDashboardUser } from "../..";
import { StaffQueueCard } from "../queue/StaffQueueCard";

export const StaffOverviewView = () => {
  const { t } = useTranslation();
  const user = useDashboardUser();
  const [data, setData] = useState<StaffOverviewData | null>(null);

  useEffect(() => {
    let cancelled = false;
    void getStaffOverview().then((res) => {
      if (!cancelled && res.success && res.data) {
        setData(res.data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data) {
    return null;
  }

  const stats = [
    {
      label: t("dashboard.staff.stats.pendingQueue"),
      value: data.stats.pendingQueue,
      icon: Clock,
      iconBg: "bg-warning-bg text-warning-text",
    },
    {
      label: t("dashboard.staff.stats.inProgress"),
      value: data.stats.inProgress,
      icon: Wrench,
      iconBg: "bg-info-bg text-info-text",
    },
    {
      label: t("dashboard.staff.stats.completedToday"),
      value: data.stats.completedToday,
      icon: CheckCircle2,
      iconBg: "bg-success-bg text-success-text",
    },
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
          {t("dashboard.staff.subtitle")}
        </p>
      </div>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-3">
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
                  <p className="mt-1 font-bold text-text-primary text-2xl">
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

      <StaffQueueCard items={data.queue} />
    </div>
  );
};
