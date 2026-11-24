import { Calendar, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui/card";

type ScheduleStatus = "inProgress" | "pending" | "completed";

const STATUS_BADGE_MAP: Record<ScheduleStatus, string> = {
  inProgress: "bg-info-bg text-info-text",
  pending: "bg-warning-bg text-warning-text border border-warning-border",
  completed: "bg-success-bg text-success-text",
};

export const StaffScheduleView = () => {
  const { t } = useTranslation();

  const appointments: {
    key: "item1" | "item2" | "item3";
    status: ScheduleStatus;
  }[] = [
    { key: "item1", status: "inProgress" },
    { key: "item2", status: "pending" },
    { key: "item3", status: "completed" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.staff.pages.schedule.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.staff.pages.schedule.subtitle")}
        </p>
      </div>

      <div className="space-y-3">
        {appointments.map((item) => (
          <Card
            key={item.key}
            className="bg-bg-surface shadow-card border border-border"
          >
            <CardContent className="flex flex-wrap justify-between items-center gap-3 py-1">
              <div className="flex items-start gap-3">
                <span className="flex justify-center items-center bg-primary-light mt-0.5 rounded-lg size-9 text-primary shrink-0">
                  <Calendar className="size-4" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-text-primary text-sm">
                      {t(`dashboard.staff.pages.schedule.items.${item.key}.title`)}
                    </p>
                    <span className="flex items-center gap-1 bg-bg-subtle px-2 py-0.5 rounded text-text-muted text-xs">
                      <Clock className="size-3" />
                      <span>
                        {t(`dashboard.staff.pages.schedule.items.${item.key}.time`)}
                      </span>
                    </span>
                  </div>
                  <p className="mt-0.5 text-text-muted text-xs">
                    {t(`dashboard.staff.pages.schedule.items.${item.key}.meta`)}
                  </p>
                </div>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${STATUS_BADGE_MAP[item.status]}`}
              >
                {t(`dashboard.status.${item.status}`)}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
