import { useState } from "react";
import { Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type RepairStatus = "pending" | "inProgress" | "completed";
type FilterStatus = "all" | RepairStatus;

const STATUS_BADGE_MAP: Record<RepairStatus, string> = {
  pending: "bg-warning-bg text-warning-text border border-warning-border",
  inProgress: "bg-info-bg text-info-text",
  completed: "bg-success-bg text-success-text",
};

export const StaffRepairsView = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterStatus>("all");

  const items: {
    key: "item1" | "item2" | "item3";
    status: RepairStatus;
  }[] = [
    { key: "item1", status: "pending" },
    { key: "item2", status: "inProgress" },
    { key: "item3", status: "completed" },
  ];

  const filters: { value: FilterStatus; label: string }[] = [
    { value: "all", label: t("dashboard.staff.pages.repairs.filterAll") },
    { value: "pending", label: t("dashboard.status.pending") },
    { value: "inProgress", label: t("dashboard.status.inProgress") },
    { value: "completed", label: t("dashboard.status.completed") },
  ];

  const visibleItems =
    filter === "all" ? items : items.filter((item) => item.status === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.staff.pages.repairs.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.staff.pages.repairs.subtitle")}
        </p>
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
                  <Wrench className="size-4" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-text-primary text-sm">
                      {t(`dashboard.staff.pages.repairs.items.${item.key}.title`)}
                    </p>
                    <span className="bg-bg-subtle px-2 py-0.5 rounded text-text-muted text-xs">
                      {t(`dashboard.staff.pages.repairs.items.${item.key}.device`)}
                    </span>
                  </div>
                  <p className="mt-0.5 text-text-muted text-xs">
                    {t(`dashboard.staff.pages.repairs.items.${item.key}.meta`)}
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
