import { useEffect, useState } from "react";
import { ArrowLeft, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getHelpRequestById } from "@/modules/api/mock/requests";
import type { Locale } from "@/modules/i18n";
import type {
  HelpRequest,
  RequestStatus,
} from "@/modules/interface/api/requests";

const STATUS_BADGE_MAP: Record<RequestStatus, string> = {
  pending: "bg-warning-bg text-warning-text border border-warning-border",
  inProgress: "bg-info-bg text-info-text",
  completed: "bg-success-bg text-success-text",
};

export const RequestDetailView = () => {
  const { requestId } = useParams<{ requestId: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [result, setResult] = useState<{
    id: string;
    request: HelpRequest | null;
  } | null>(null);

  useEffect(() => {
    if (!requestId) return;
    let cancelled = false;
    void getHelpRequestById(requestId).then((res) => {
      if (!cancelled) {
        setResult({
          id: requestId,
          request: res.success ? res.data : null,
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [requestId]);

  const loading = Boolean(requestId) && result?.id !== requestId;
  const request =
    requestId && result?.id === requestId ? result.request : null;

  return (
    <div className="space-y-6">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => navigate("/dashboard/user/requests")}
        className="hover:bg-primary-light -ml-2 text-text-primary cursor-pointer"
      >
        <ArrowLeft className="size-4" />
        <span>{t("dashboard.user.pages.requests.form.backToList")}</span>
      </Button>

      {loading ? null : !request ? (
        <Card className="bg-bg-surface shadow-card border border-border">
          <CardContent className="py-8 text-text-muted text-sm text-center">
            {t("dashboard.user.pages.requests.detail.notFound")}
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-bg-surface shadow-card border border-border">
          <CardHeader className="space-y-3 pb-4 border-b border-border">
            <div className="flex flex-wrap justify-between items-start gap-3">
              <div className="flex items-start gap-3">
                <span className="flex justify-center items-center bg-primary-light mt-0.5 rounded-lg size-10 text-primary shrink-0">
                  <FileText className="size-5" />
                </span>
                <div>
                  <CardTitle className="font-bold text-text-primary text-xl">
                    {request.title[locale]}
                  </CardTitle>
                  <p className="mt-1 text-text-muted text-xs">
                    {request.meta[locale]}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-bg-subtle px-2.5 py-0.5 rounded-full font-medium text-text-muted text-xs">
                  {t(
                    `dashboard.user.pages.requests.categories.${request.category}`,
                  )}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${
                    request.urgency === "urgent"
                      ? "bg-danger-bg-hover border border-danger-border text-danger-text"
                      : "bg-bg-subtle text-text-muted"
                  }`}
                >
                  {t(
                    `dashboard.user.pages.requests.detail.${
                      request.urgency === "urgent"
                        ? "urgencyUrgent"
                        : "urgencyNormal"
                    }`,
                  )}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${STATUS_BADGE_MAP[request.status]}`}
                >
                  {t(`dashboard.status.${request.status}`)}
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-5 pt-2">
            <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.user.pages.requests.detail.requestIdLabel")}
                </p>
                <p className="mt-1 font-mono text-text-primary text-xs break-all">
                  {request.id}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.user.pages.requests.detail.categoryLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {t(
                    `dashboard.user.pages.requests.categories.${request.category}`,
                  )}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.user.pages.requests.detail.urgencyLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {t(
                    `dashboard.user.pages.requests.detail.${
                      request.urgency === "urgent"
                        ? "urgencyUrgent"
                        : "urgencyNormal"
                    }`,
                  )}
                </p>
              </div>
              {request.device && (
                <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                  <p className="text-text-muted text-xs">
                    {t("dashboard.user.pages.requests.detail.deviceLabel")}
                  </p>
                  <p className="mt-1 font-medium text-text-primary text-sm">
                    {request.device}
                  </p>
                </div>
              )}
              {request.preferredDate && (
                <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                  <p className="text-text-muted text-xs">
                    {t(
                      "dashboard.user.pages.requests.detail.preferredDateLabel",
                    )}
                  </p>
                  <p className="mt-1 font-medium text-text-primary text-sm">
                    {request.preferredDate}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-text-primary text-sm">
                {t("dashboard.user.pages.requests.detail.descriptionLabel")}
              </p>
              <p className="bg-bg-subtle/60 p-4 border border-border rounded-lg text-text-body text-sm leading-relaxed whitespace-pre-wrap">
                {request.description?.[locale] ||
                  t("dashboard.user.pages.requests.detail.noDescription")}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
