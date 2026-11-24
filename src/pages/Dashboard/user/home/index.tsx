import { useState } from "react";
import {
  Accessibility,
  Bell,
  Calendar,
  CalendarX,
  ChevronRight,
  MessageSquare,
  User,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { RequestTimeline } from "./RequestTimeline";

type ActivityStatus = "inProgress" | "completed";

export const UserHomeView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [messageNotice, setMessageNotice] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const activityItems: {
    key: "item1" | "item2" | "item3";
    status: ActivityStatus;
  }[] = [
    { key: "item1", status: "inProgress" },
    { key: "item2", status: "completed" },
    { key: "item3", status: "completed" },
  ];

  const handleSendMessage = () => {
    setMessageNotice(true);
  };

  return (
    <div className="space-y-5">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-text-muted text-xs"
      >
        <Link to="/dashboard/user" className="hover:text-primary hover:underline">
          {t("dashboard.user.tracking.breadcrumb.dashboard")}
        </Link>
        <ChevronRight className="size-3.5" />
        <Link
          to="/dashboard/user/repair"
          className="hover:text-primary hover:underline"
        >
          {t("dashboard.user.tracking.breadcrumb.repairTrack")}
        </Link>
        <span className="font-semibold text-text-primary">
          {t("dashboard.user.tracking.breadcrumb.statusTrack")}
        </span>
      </nav>

      <div className="items-start gap-5 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_310px]">
        {/* Left main column */}
        <div className="space-y-5">
          {/* Request summary card */}
          <Card className="bg-bg-surface shadow-card border border-border">
            <CardContent className="space-y-4 py-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-bold text-text-primary text-lg">
                  {t("dashboard.user.tracking.requestLabel")}
                </span>
                <span className="font-bold text-primary text-lg">
                  {t("dashboard.user.tracking.requestCode")}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${
                    isCancelled
                      ? "bg-danger-bg-hover border border-danger-border text-danger-text"
                      : "bg-info-bg text-info-text"
                  }`}
                >
                  {isCancelled
                    ? t("dashboard.user.tracking.actions.cancelledStatus")
                    : t("dashboard.status.inProgress")}
                </span>
                <span className="text-text-muted text-xs">
                  {t("dashboard.user.tracking.updatedAt")}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 bg-bg-subtle px-3.5 py-3 rounded-xl text-sm">
                <span className="flex justify-center items-center bg-primary-light rounded-lg size-9 text-primary shrink-0">
                  <Accessibility className="size-4" />
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-text-body">
                    <span className="font-semibold text-text-primary">
                      {t("dashboard.user.tracking.deviceLabel")}
                    </span>{" "}
                    {t("dashboard.user.tracking.deviceValue")}
                  </p>
                  <span aria-hidden="true" className="hidden sm:inline text-border">
                    |
                  </span>
                  <p className="text-text-body">
                    <span className="font-semibold text-text-primary">
                      {t("dashboard.user.tracking.issueLabel")}
                    </span>{" "}
                    {t("dashboard.user.tracking.issueValue")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fixed responsive timeline stepper */}
          <RequestTimeline />

          {/* Assigned helper card */}
          <Card className="bg-bg-surface shadow-card border border-border">
            <CardHeader>
              <CardTitle className="font-bold text-text-primary text-base">
                {t("dashboard.user.tracking.helper.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-3.5">
                <span className="flex justify-center items-center bg-primary-light rounded-full size-12 text-primary shrink-0">
                  <User className="size-5" />
                </span>
                <div className="space-y-0.5">
                  <p className="font-bold text-text-primary text-sm">
                    {t("dashboard.user.tracking.helper.name")}
                  </p>
                  <p className="text-text-muted text-xs">
                    {t("dashboard.user.tracking.helper.role")}
                  </p>
                  <p className="text-text-muted text-xs">
                    {t("dashboard.user.tracking.helper.center")}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <Button
                  type="button"
                  onClick={handleSendMessage}
                  className="bg-primary hover:bg-primary-hover h-9 text-text-inverse cursor-pointer"
                >
                  <MessageSquare className="size-4" />
                  <span>{t("dashboard.user.tracking.helper.sendMessage")}</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/dashboard/user/helpers")}
                  className="hover:bg-primary-light border-border-input h-9 text-text-primary cursor-pointer"
                >
                  <Users className="size-4" />
                  <span>{t("dashboard.user.tracking.helper.viewHelper")}</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Next appointment card */}
          <Card className="bg-bg-surface shadow-card border border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-bold text-text-primary text-base">
                <Calendar className="size-4 text-primary" />
                <span>{t("dashboard.user.tracking.appointment.title")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3 bg-bg-subtle px-4 py-3.5 rounded-xl text-text-muted text-sm">
                <Calendar className="mt-0.5 size-4 text-text-muted shrink-0" />
                <p>{t("dashboard.user.tracking.appointment.empty")}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right sidebar column */}
        <div className="space-y-5">
          {/* Activity log card */}
          <Card className="bg-bg-surface shadow-card border border-border">
            <CardHeader>
              <CardTitle className="font-bold text-text-primary text-base">
                {t("dashboard.user.tracking.activity.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {activityItems.map((item, index) => {
                const isLast = index === activityItems.length - 1;
                return (
                  <div key={item.key} className="relative flex gap-3">
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="top-8 -bottom-5 left-4 absolute bg-border w-px"
                      />
                    )}
                    <span className="relative z-10 flex justify-center items-center bg-primary-light rounded-full size-8 text-primary shrink-0">
                      <Bell className="size-3.5" />
                    </span>
                    <div className="flex-1 space-y-1 min-w-0">
                      <div className="flex flex-wrap justify-between items-center gap-1.5">
                        <span className="text-text-muted text-xs">
                          {t(
                            `dashboard.user.tracking.activity.items.${item.key}.time`,
                          )}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full font-medium text-[11px] ${
                            item.status === "inProgress"
                              ? "bg-info-bg text-info-text"
                              : "bg-bg-subtle text-text-muted"
                          }`}
                        >
                          {t(`dashboard.status.${item.status}`)}
                        </span>
                      </div>
                      <p className="font-bold text-text-primary text-sm">
                        {t(
                          `dashboard.user.tracking.activity.items.${item.key}.title`,
                        )}
                      </p>
                      <p className="text-text-body text-xs leading-relaxed">
                        {t(
                          `dashboard.user.tracking.activity.items.${item.key}.description`,
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Action buttons card */}
          <Card className="bg-bg-surface shadow-card border border-border">
            <CardContent className="space-y-2.5 py-1">
              <Button
                type="button"
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary-hover w-full h-10 text-text-inverse cursor-pointer"
              >
                <MessageSquare className="size-4" />
                <span>{t("dashboard.user.tracking.actions.sendMessage")}</span>
              </Button>

              {!confirmCancel ? (
                <Button
                  type="button"
                  variant="outline"
                  disabled={isCancelled}
                  onClick={() => setConfirmCancel(true)}
                  className="hover:bg-danger-bg-hover border-danger-border w-full h-10 text-danger-text hover:text-danger-text cursor-pointer"
                >
                  <CalendarX className="size-4" />
                  <span>
                    {isCancelled
                      ? t("dashboard.user.tracking.actions.cancelledStatus")
                      : t("dashboard.user.tracking.actions.cancelAppointment")}
                  </span>
                </Button>
              ) : (
                <div className="space-y-2 bg-danger-bg-hover p-3 border border-danger-border rounded-lg">
                  <p className="font-medium text-danger-text text-xs">
                    {t("dashboard.user.tracking.actions.cancelConfirm")}
                  </p>
                  <div className="gap-2 grid grid-cols-2">
                    <Button
                      type="button"
                      size="xs"
                      onClick={() => {
                        setIsCancelled(true);
                        setConfirmCancel(false);
                      }}
                      className="bg-danger-text hover:bg-danger-text/90 text-text-inverse cursor-pointer"
                    >
                      {t("dashboard.user.tracking.actions.confirmCancel")}
                    </Button>
                    <Button
                      type="button"
                      size="xs"
                      variant="outline"
                      onClick={() => setConfirmCancel(false)}
                      className="border-border-input text-text-primary cursor-pointer"
                    >
                      {t("dashboard.user.tracking.actions.keepAppointment")}
                    </Button>
                  </div>
                </div>
              )}

              {messageNotice && (
                <p
                  role="status"
                  className="bg-success-bg px-3 py-2 rounded-lg font-medium text-success-text text-xs"
                >
                  {t("dashboard.user.tracking.actions.messageSent")}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
