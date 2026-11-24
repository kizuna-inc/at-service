import { ClipboardCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Locale } from "@/modules/i18n";
import type {
  StaffQueueItem,
  StaffQueueStatus,
} from "@/modules/interface/api/dashboard";

const STATUS_BADGE_MAP: Record<StaffQueueStatus, string> = {
  pending: "bg-warning-bg text-warning-text border border-warning-border",
  inProgress: "bg-info-bg text-info-text",
  completed: "bg-success-bg text-success-text",
};

export const StaffQueueCard = ({ items }: { items: StaffQueueItem[] }) => {
  const { t, i18n } = useTranslation();
  const locale: Locale = i18n.language === "en" ? "en" : "th";

  return (
    <Card className="bg-bg-surface shadow-card border border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-semibold text-text-primary text-base">
          <ClipboardCheck className="size-4 text-primary" />
          <span>{t("dashboard.staff.queueTitle")}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap justify-between items-center gap-3 bg-bg-subtle/60 px-4 py-3 border border-border rounded-lg"
          >
            <div>
              <p className="font-medium text-text-primary text-sm">
                {item.title[locale]}
              </p>
              <p className="text-text-muted text-xs">{item.meta[locale]}</p>
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
