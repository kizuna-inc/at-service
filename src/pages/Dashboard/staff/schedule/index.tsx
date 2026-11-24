import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui/card";
import { getStaffSchedule } from "@/modules/api/mock/dashboard";
import type { Locale } from "@/modules/i18n";
import type {
  StaffQueueStatus,
  StaffScheduleItem,
} from "@/modules/interface/api/dashboard";

const STATUS_BADGE_MAP: Record<StaffQueueStatus, string> = {
  inProgress: "bg-info-bg text-info-text",
  pending: "bg-warning-bg text-warning-text border border-warning-border",
  completed: "bg-success-bg text-success-text",
};

export const StaffScheduleView = () => {
  const { t, i18n } = useTranslation();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [appointments, setAppointments] = useState<StaffScheduleItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    void getStaffSchedule().then((res) => {
      if (!cancelled && res.success && res.data) {
        setAppointments(res.data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

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
            key={item.id}
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
                      {item.title[locale]}
                    </p>
                    <span className="flex items-center gap-1 bg-bg-subtle px-2 py-0.5 rounded text-text-muted text-xs">
                      <Clock className="size-3" />
                      <span>{item.time[locale]}</span>
                    </span>
                  </div>
                  <p className="mt-0.5 text-text-muted text-xs">
                    {item.meta[locale]}
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
