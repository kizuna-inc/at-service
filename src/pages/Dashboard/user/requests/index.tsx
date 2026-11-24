import { useEffect, useState } from "react";
import { CheckCircle2, ChevronRight, FileText, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getHelpRequests } from "@/modules/api/mock/requests";
import type { Locale } from "@/modules/i18n";
import type {
  HelpRequest,
  RequestStatus,
} from "@/modules/interface/api/requests";

type FilterStatus = "all" | RequestStatus;

const STATUS_BADGE_MAP: Record<RequestStatus, string> = {
  pending: "bg-warning-bg text-warning-text border border-warning-border",
  inProgress: "bg-info-bg text-info-text",
  completed: "bg-success-bg text-success-text",
};

export const HelpRequestsView = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [items, setItems] = useState<HelpRequest[]>([]);
  const created = Boolean(
    (location.state as { created?: boolean } | null)?.created,
  );

  useEffect(() => {
    let cancelled = false;
    void getHelpRequests().then((res) => {
      if (!cancelled && res.success && res.data) {
        setItems(res.data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const filters: { value: FilterStatus; label: string }[] = [
    { value: "all", label: t("dashboard.user.pages.requests.filterAll") },
    { value: "pending", label: t("dashboard.status.pending") },
    { value: "inProgress", label: t("dashboard.status.inProgress") },
    { value: "completed", label: t("dashboard.status.completed") },
  ];

  const visibleItems =
    filter === "all" ? items : items.filter((item) => item.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-start gap-3">
        <div>
          <h1 className="font-bold text-text-primary text-2xl">
            {t("dashboard.user.pages.requests.title")}
          </h1>
          <p className="mt-1 text-text-muted text-sm">
            {t("dashboard.user.pages.requests.subtitle")}
          </p>
        </div>
        <Button
          type="button"
          onClick={() => navigate("/dashboard/user/requests/new")}
          className="bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
        >
          <Plus className="size-4" />
          <span>{t("dashboard.user.pages.requests.newRequest")}</span>
        </Button>
      </div>

      {created && (
        <Alert
          role="status"
          className="bg-success-bg border-success-text/20 text-success-text"
        >
          <CheckCircle2 className="size-4 text-success-text" />
          <AlertDescription className="font-medium text-success-text">
            {t("dashboard.user.pages.requests.createdNotice")}
          </AlertDescription>
        </Alert>
      )}

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
          <Link
            key={item.id}
            to={`/dashboard/user/requests/${item.id}`}
            className="block group"
          >
            <Card className="bg-bg-surface shadow-card border border-border group-hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-wrap justify-between items-center gap-3 py-1">
                <div className="flex items-start gap-3">
                  <span className="flex justify-center items-center bg-primary-light mt-0.5 rounded-lg size-9 text-primary shrink-0">
                    <FileText className="size-4" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-text-primary text-sm">
                        {item.title[locale]}
                      </p>
                      <span className="bg-bg-subtle px-2 py-0.5 rounded text-text-muted text-xs">
                        {t(
                          `dashboard.user.pages.requests.categories.${item.category}`,
                        )}
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
                  <ChevronRight className="size-4 text-text-muted group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
