import { useState } from "react";
import { Laptop, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type DeviceStatus = "active" | "inProgress" | "pending";
type FilterStatus = "all" | DeviceStatus;

const STATUS_BADGE_MAP: Record<DeviceStatus, string> = {
  active: "bg-success-bg text-success-text",
  inProgress: "bg-info-bg text-info-text",
  pending: "bg-warning-bg text-warning-text border border-warning-border",
};

export const DevicesView = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterStatus>("all");

  const items: {
    key: "item1" | "item2" | "item3";
    status: DeviceStatus;
  }[] = [
    { key: "item1", status: "active" },
    { key: "item2", status: "inProgress" },
    { key: "item3", status: "pending" },
  ];

  const filters: { value: FilterStatus; label: string }[] = [
    { value: "all", label: t("dashboard.admin.pages.devices.filterAll") },
    { value: "active", label: t("dashboard.status.active") },
    { value: "inProgress", label: t("dashboard.status.inProgress") },
    { value: "pending", label: t("dashboard.status.pending") },
  ];

  const visibleItems =
    filter === "all" ? items : items.filter((item) => item.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-start gap-3">
        <div>
          <h1 className="font-bold text-text-primary text-2xl">
            {t("dashboard.admin.pages.devices.title")}
          </h1>
          <p className="mt-1 text-text-muted text-sm">
            {t("dashboard.admin.pages.devices.subtitle")}
          </p>
        </div>
        <Button
          type="button"
          className="bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
        >
          <Plus className="size-4" />
          <span>{t("dashboard.admin.pages.devices.addAction")}</span>
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((option) => {
          const active = filter === option.value;
          return (
            <Button
              key={option.value}
              type="button"
              size="sm"
              variant={active ? "default" : "outline"}
              aria-pressed={active}
              onClick={() => setFilter(option.value)}
              className={
                active
                  ? "bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
                  : "border-border-input hover:bg-primary-light text-text-primary cursor-pointer"
              }
            >
              {option.label}
            </Button>
          );
        })}
      </div>

      <div className="space-y-3">
        {visibleItems.map((item) => (
          <Card
            key={item.key}
            className="bg-bg-surface shadow-card border border-border"
          >
            <CardContent className="flex flex-wrap justify-between items-center gap-3 py-1">
              <div className="flex items-start gap-3">
                <span className="flex justify-center items-center bg-primary-light mt-0.5 rounded-lg size-9 text-primary shrink-0">
                  <Laptop className="size-4" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-text-primary text-sm">
                      {t(
                        `dashboard.admin.pages.devices.items.${item.key}.name`,
                      )}
                    </p>
                    <span className="bg-bg-subtle px-2 py-0.5 rounded text-text-muted text-xs">
                      {t(
                        `dashboard.admin.pages.devices.items.${item.key}.category`,
                      )}
                    </span>
                  </div>
                  <p className="mt-0.5 text-text-muted text-xs">
                    {t(`dashboard.admin.pages.devices.items.${item.key}.meta`)}
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
