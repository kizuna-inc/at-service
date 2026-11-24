import { useEffect, useState } from "react";
import { BarChart2, CheckCircle2, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserReports } from "@/modules/api/mock/dashboard";
import type { Locale } from "@/modules/i18n";
import type { UserReportsData } from "@/modules/interface/api/dashboard";

export const ReportsView = () => {
  const { t, i18n } = useTranslation();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [data, setData] = useState<UserReportsData | null>(null);

  useEffect(() => {
    let cancelled = false;
    void getUserReports().then((res) => {
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
      label: t("dashboard.user.pages.reports.stats.totalRequests"),
      value: data.stats.totalRequests,
      icon: BarChart2,
      iconBg: "bg-primary-light text-primary",
    },
    {
      label: t("dashboard.user.pages.reports.stats.completedServices"),
      value: data.stats.completedServices,
      icon: CheckCircle2,
      iconBg: "bg-success-bg text-success-text",
    },
    {
      label: t("dashboard.user.pages.reports.stats.hoursAssisted"),
      value: data.stats.hoursAssisted,
      icon: Clock,
      iconBg: "bg-info-bg text-info-text",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.user.pages.reports.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.user.pages.reports.subtitle")}
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
            {t("dashboard.user.pages.reports.historyTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {data.history.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap justify-between items-center gap-2 bg-bg-subtle/60 px-3.5 py-2.5 border border-border rounded-lg"
            >
              <div>
                <p className="font-medium text-text-primary text-sm">
                  {item.title[locale]}
                </p>
                <p className="text-text-muted text-xs">{item.date[locale]}</p>
              </div>
              <span className="bg-success-bg px-2.5 py-0.5 rounded-full font-medium text-success-text text-xs">
                {item.result[locale]}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
