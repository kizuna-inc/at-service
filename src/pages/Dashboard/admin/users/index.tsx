import { useEffect, useState } from "react";
import { UserPlus, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAdminUsers } from "@/modules/api/mock/dashboard";
import { showDemoAlert } from "@/modules/demoAlert";
import type { Locale } from "@/modules/i18n";
import type { AdminUserItem } from "@/modules/interface/api/dashboard";

type UserStatus = "active" | "pending";
type FilterStatus = "all" | UserStatus;

const STATUS_BADGE_MAP: Record<UserStatus, string> = {
  active: "bg-success-bg text-success-text",
  pending: "bg-warning-bg text-warning-text border border-warning-border",
};

export const UsersView = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [items, setItems] = useState<AdminUserItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    void getAdminUsers().then((res) => {
      if (!cancelled && res.success && res.data) {
        setItems(res.data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const filters: { value: FilterStatus; label: string }[] = [
    { value: "all", label: t("dashboard.admin.pages.users.filterAll") },
    { value: "active", label: t("dashboard.status.active") },
    { value: "pending", label: t("dashboard.status.pending") },
  ];

  const visibleItems =
    filter === "all" ? items : items.filter((item) => item.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-start gap-3">
        <div>
          <h1 className="font-bold text-text-primary text-2xl">
            {t("dashboard.admin.pages.users.title")}
          </h1>
          <p className="mt-1 text-text-muted text-sm">
            {t("dashboard.admin.pages.users.subtitle")}
          </p>
        </div>
        <Button
          type="button"
          onClick={showDemoAlert}
          className="bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
        >
          <UserPlus className="size-4" />
          <span>{t("dashboard.admin.pages.users.addAction")}</span>
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
            key={item.id}
            className="bg-bg-surface shadow-card border border-border"
          >
            <CardContent className="flex flex-wrap justify-between items-center gap-3 py-1">
              <div className="flex items-start gap-3">
                <span className="flex justify-center items-center bg-primary-light mt-0.5 rounded-lg size-9 text-primary shrink-0">
                  <Users className="size-4" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-text-primary text-sm">
                      {item.name[locale]}
                    </p>
                    <span className="bg-bg-subtle px-2 py-0.5 rounded text-text-muted text-xs">
                      {item.username}
                    </span>
                  </div>
                  <p className="mt-0.5 text-text-muted text-xs">
                    {item.meta[locale]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${STATUS_BADGE_MAP[item.status]}`}
                >
                  {t(`dashboard.status.${item.status}`)}
                </span>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => navigate(`/dashboard/admin/${item.id}`)}
                  className="border-border-input hover:bg-primary-light text-text-primary cursor-pointer"
                >
                  {t("dashboard.admin.pages.users.viewProfile")}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
