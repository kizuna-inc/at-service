import { Calendar, Clock, UserCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export const HelpersView = () => {
  const { t } = useTranslation();

  const helpers: {
    key: "item1" | "item2" | "item3";
    available: boolean;
  }[] = [
    { key: "item1", available: true },
    { key: "item2", available: true },
    { key: "item3", available: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.user.pages.helpers.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.user.pages.helpers.subtitle")}
        </p>
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
        {helpers.map((helper) => (
          <Card
            key={helper.key}
            className="flex flex-col justify-between bg-bg-surface shadow-card border border-border"
          >
            <div>
              <CardHeader className="flex-row justify-between items-start gap-2">
                <span className="flex justify-center items-center bg-primary-light rounded-full size-10 text-primary shrink-0">
                  <UserCheck className="size-5" />
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${
                    helper.available
                      ? "bg-success-bg text-success-text"
                      : "bg-warning-bg text-warning-text border border-warning-border"
                  }`}
                >
                  {helper.available
                    ? t("dashboard.user.pages.helpers.available")
                    : t("dashboard.user.pages.helpers.busy")}
                </span>
              </CardHeader>
              <CardContent className="space-y-1.5">
                <p className="font-semibold text-text-primary text-base">
                  {t(`dashboard.user.pages.helpers.list.${helper.key}.name`)}
                </p>
                <p className="text-text-body text-xs">
                  {t(
                    `dashboard.user.pages.helpers.list.${helper.key}.specialty`,
                  )}
                </p>
                <p className="flex items-center gap-1.5 pt-1 text-text-muted text-xs">
                  <Clock className="size-3.5 shrink-0" />
                  <span>
                    {t(
                      `dashboard.user.pages.helpers.list.${helper.key}.schedule`,
                    )}
                  </span>
                </p>
              </CardContent>
            </div>
            <CardFooter className="bg-transparent border-t border-border">
              <Button
                type="button"
                size="sm"
                disabled={!helper.available}
                className="bg-primary hover:bg-primary-hover w-full text-text-inverse cursor-pointer"
              >
                <Calendar className="size-4" />
                <span>{t("dashboard.user.pages.helpers.bookAction")}</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
