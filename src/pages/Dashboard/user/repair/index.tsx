import { Laptop, Plus, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TicketStatus = "inProgress" | "completed";

const STATUS_BADGE_MAP: Record<TicketStatus, string> = {
  inProgress: "bg-info-bg text-info-text",
  completed: "bg-success-bg text-success-text",
};

export const RepairServicesView = () => {
  const { t } = useTranslation();

  const devices: ("item1" | "item2")[] = ["item1", "item2"];
  const tickets: {
    key: "item1" | "item2";
    status: TicketStatus;
  }[] = [
    { key: "item1", status: "inProgress" },
    { key: "item2", status: "completed" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-start gap-3">
        <div>
          <h1 className="font-bold text-text-primary text-2xl">
            {t("dashboard.user.pages.repair.title")}
          </h1>
          <p className="mt-1 text-text-muted text-sm">
            {t("dashboard.user.pages.repair.subtitle")}
          </p>
        </div>
        <Button
          type="button"
          className="bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
        >
          <Plus className="size-4" />
          <span>{t("dashboard.user.pages.repair.reportIssue")}</span>
        </Button>
      </div>

      <Card className="bg-bg-surface shadow-card border border-border">
        <CardHeader>
          <CardTitle className="font-semibold text-text-primary text-base">
            {t("dashboard.user.pages.repair.devicesTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="gap-3 grid grid-cols-1 sm:grid-cols-2">
          {devices.map((key) => (
            <div
              key={key}
              className="flex items-start gap-3 bg-bg-subtle/60 p-3.5 border border-border rounded-lg"
            >
              <span className="flex justify-center items-center bg-primary-light rounded-lg size-9 text-primary shrink-0">
                <Laptop className="size-4" />
              </span>
              <div>
                <p className="font-medium text-text-primary text-sm">
                  {t(`dashboard.user.pages.repair.devices.${key}.name`)}
                </p>
                <p className="mt-0.5 text-text-muted text-xs">
                  {t(`dashboard.user.pages.repair.devices.${key}.meta`)}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-bg-surface shadow-card border border-border">
        <CardHeader>
          <CardTitle className="font-semibold text-text-primary text-base">
            {t("dashboard.user.pages.repair.ticketsTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.key}
              className="flex flex-wrap justify-between items-center gap-3 bg-bg-subtle/60 px-3.5 py-3 border border-border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex justify-center items-center bg-info-bg rounded-lg size-9 text-info-text shrink-0">
                  <Wrench className="size-4" />
                </span>
                <div>
                  <p className="font-medium text-text-primary text-sm">
                    {t(
                      `dashboard.user.pages.repair.tickets.${ticket.key}.title`,
                    )}
                  </p>
                  <p className="text-text-muted text-xs">
                    {t(
                      `dashboard.user.pages.repair.tickets.${ticket.key}.meta`,
                    )}
                  </p>
                </div>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${STATUS_BADGE_MAP[ticket.status]}`}
              >
                {t(`dashboard.status.${ticket.status}`)}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
