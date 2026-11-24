import { useEffect, useState } from "react";
import { Calendar, Clock, UserCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getUserHelpers } from "@/modules/api/mock/dashboard";
import type { Locale } from "@/modules/i18n";
import type { HelperProfile } from "@/modules/interface/api/dashboard";

export const HelpersView = () => {
  const { t, i18n } = useTranslation();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [helpers, setHelpers] = useState<HelperProfile[]>([]);

  useEffect(() => {
    let cancelled = false;
    void getUserHelpers().then((res) => {
      if (!cancelled && res.success && res.data) {
        setHelpers(res.data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

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
            key={helper.id}
            className="flex flex-col justify-between bg-bg-surface shadow-card border border-border"
          >
            <div>
              <CardHeader className="flex flex-row justify-between items-start gap-2">
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
              <CardContent className="space-y-1.5 pt-3">
                <p className="font-semibold text-text-primary text-base">
                  {helper.name[locale]}
                </p>
                <p className="text-text-body text-xs">
                  {helper.specialty[locale]}
                </p>
                <p className="flex items-center gap-1.5 pt-1 text-text-muted text-xs">
                  <Clock className="size-3.5 shrink-0" />
                  <span>{helper.schedule[locale]}</span>
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
