import { ClipboardCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type QueueStatus = "pending" | "inProgress" | "completed";

const STATUS_BADGE_MAP: Record<QueueStatus, string> = {
  pending: "bg-warning-bg text-warning-text border border-warning-border",
  inProgress: "bg-info-bg text-info-text",
  completed: "bg-success-bg text-success-text",
};

export const StaffQueueCard = () => {
  const { t } = useTranslation();

  const queueItems: {
    key: "item1" | "item2" | "item3";
    status: QueueStatus;
  }[] = [
    { key: "item1", status: "pending" },
    { key: "item2", status: "inProgress" },
    { key: "item3", status: "completed" },
  ];

  return (
    <Card className="bg-bg-surface shadow-card border border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-semibold text-text-primary text-base">
          <ClipboardCheck className="size-4 text-primary" />
          <span>{t("dashboard.staff.queueTitle")}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {queueItems.map((item) => (
          <div
            key={item.key}
            className="flex flex-wrap justify-between items-center gap-3 bg-bg-subtle/60 px-4 py-3 border border-border rounded-lg"
          >
            <div>
              <p className="font-medium text-text-primary text-sm">
                {t(`dashboard.staff.queueItems.${item.key}.title`)}
              </p>
              <p className="text-text-muted text-xs">
                {t(`dashboard.staff.queueItems.${item.key}.meta`)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${STATUS_BADGE_MAP[item.status]}`}
              >
                {t(`dashboard.status.${item.status}`)}
              </span>
              <Button
                type="button"
                size="xs"
                variant={item.status === "pending" ? "default" : "outline"}
                className={
                  item.status === "pending"
                    ? "bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
                    : "border-border-input hover:bg-primary-light text-text-primary cursor-pointer"
                }
              >
                {item.status === "pending"
                  ? t("dashboard.staff.actionAccept")
                  : t("dashboard.staff.actionView")}
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
