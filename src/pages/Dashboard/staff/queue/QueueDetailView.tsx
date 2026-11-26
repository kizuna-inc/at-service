import { useEffect, useState } from "react";
import { ArrowLeft, ClipboardCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getStaffQueueById } from "@/modules/api/mock/dashboard";
import { showDemoAlert } from "@/modules/demoAlert";
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

export const StaffQueueDetailView = () => {
  const { queueId } = useParams<{ queueId: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [result, setResult] = useState<{
    id: string;
    item: StaffQueueItem | null;
  } | null>(null);

  useEffect(() => {
    if (!queueId) return;
    let cancelled = false;
    void getStaffQueueById(queueId).then((res) => {
      if (!cancelled) {
        setResult({
          id: queueId,
          item: res.success ? res.data : null,
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [queueId]);

  const loading = Boolean(queueId) && result?.id !== queueId;
  const item = queueId && result?.id === queueId ? result.item : null;

  return (
    <div className="space-y-6">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => navigate("/dashboard/staff/queue")}
        className="hover:bg-primary-light -ml-2 text-text-primary cursor-pointer"
      >
        <ArrowLeft className="size-4" />
        <span>{t("dashboard.staff.pages.queueDetail.backToQueue")}</span>
      </Button>

      {loading ? null : !item ? (
        <Card className="bg-bg-surface shadow-card border border-border">
          <CardContent className="py-8 text-text-muted text-sm text-center">
            {t("dashboard.staff.pages.queueDetail.notFound")}
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-bg-surface shadow-card border border-border">
          <CardHeader className="space-y-3 pb-4 border-b border-border">
            <div className="flex flex-wrap justify-between items-start gap-3">
              <div className="flex items-start gap-3">
                <span className="flex justify-center items-center bg-primary-light mt-0.5 rounded-lg size-10 text-primary shrink-0">
                  <ClipboardCheck className="size-5" />
                </span>
                <div>
                  <CardTitle className="font-bold text-text-primary text-xl">
                    {item.title[locale]}
                  </CardTitle>
                  <p className="mt-1 text-text-muted text-xs">
                    {item.meta[locale]}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${
                    item.priority === "urgent"
                      ? "bg-danger-bg-hover border border-danger-border text-danger-text"
                      : "bg-bg-subtle text-text-muted"
                  }`}
                >
                  {t(
                    `dashboard.staff.pages.queueDetail.${
                      item.priority === "urgent"
                        ? "priorityUrgent"
                        : "priorityNormal"
                    }`,
                  )}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${STATUS_BADGE_MAP[item.status]}`}
                >
                  {t(`dashboard.status.${item.status}`)}
                </span>
                {item.status === "pending" && (
                  <Button
                    type="button"
                    size="sm"
                    onClick={showDemoAlert}
                    className="bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
                  >
                    {t("dashboard.staff.actionAccept")}
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5 pt-2">
            <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.staff.pages.queueDetail.caseIdLabel")}
                </p>
                <p className="mt-1 font-mono text-text-primary text-xs break-all">
                  {item.id}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.staff.pages.queueDetail.requesterLabel")}
                </p>
                <div className="flex flex-wrap justify-between items-center gap-2 mt-1">
                  <p className="font-medium text-text-primary text-sm">
                    {item.requesterName[locale]}
                  </p>
                  {item.requesterId && (
                    <Button
                      type="button"
                      size="xs"
                      variant="outline"
                      onClick={() =>
                        navigate(`/dashboard/staff/${item.requesterId}`)
                      }
                      className="border-border-input hover:bg-primary-light text-text-primary cursor-pointer"
                    >
                      {t("dashboard.staff.pages.queueDetail.viewProfile")}
                    </Button>
                  )}
                </div>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.staff.pages.queueDetail.priorityLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {t(
                    `dashboard.staff.pages.queueDetail.${
                      item.priority === "urgent"
                        ? "priorityUrgent"
                        : "priorityNormal"
                    }`,
                  )}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.staff.pages.queueDetail.deviceLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {item.device[locale]}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.staff.pages.queueDetail.locationLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {item.location[locale]}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.staff.pages.queueDetail.requestedAtLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {item.requestedAt[locale]}
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-text-primary text-sm">
                {t("dashboard.staff.pages.queueDetail.descriptionLabel")}
              </p>
              <p className="bg-bg-subtle/60 p-4 border border-border rounded-lg text-text-body text-sm leading-relaxed whitespace-pre-wrap">
                {item.description[locale]}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
