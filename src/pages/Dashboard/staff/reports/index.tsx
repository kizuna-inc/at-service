import { BarChart2, CheckCircle2, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const StaffReportsView = () => {
  const { t } = useTranslation();

  const stats = [
    {
      label: t("dashboard.staff.pages.reports.stats.completedCases"),
      value: "28",
      icon: CheckCircle2,
      iconBg: "bg-success-bg text-success-text",
    },
    {
      label: t("dashboard.staff.pages.reports.stats.avgTurnaround"),
      value: "1.8h",
      icon: Clock,
      iconBg: "bg-info-bg text-info-text",
    },
    {
      label: t("dashboard.staff.pages.reports.stats.satisfaction"),
      value: "4.9/5",
      icon: BarChart2,
      iconBg: "bg-primary-light text-primary",
    },
  ];

  const logs: ("item1" | "item2" | "item3")[] = ["item1", "item2", "item3"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.staff.pages.reports.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.staff.pages.reports.subtitle")}
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

      <Card className="bg-bg-surface shadow-card border border-border">
        <CardHeader>
          <CardTitle className="font-semibold text-text-primary text-base">
            {t("dashboard.staff.pages.reports.logsTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {logs.map((key) => (
            <div
              key={key}
              className="flex flex-wrap justify-between items-center gap-2 bg-bg-subtle/60 px-3.5 py-2.5 border border-border rounded-lg"
            >
              <div>
                <p className="font-medium text-text-primary text-sm">
                  {t(`dashboard.staff.pages.reports.logs.${key}.title`)}
                </p>
                <p className="text-text-muted text-xs">
                  {t(`dashboard.staff.pages.reports.logs.${key}.date`)}
                </p>
              </div>
              <span className="bg-success-bg px-2.5 py-0.5 rounded-full font-medium text-success-text text-xs">
                {t(`dashboard.staff.pages.reports.logs.${key}.result`)}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
