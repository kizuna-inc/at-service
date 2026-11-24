import { useEffect, useState } from "react";
import { Briefcase, ClipboardCheck, UserCog } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getAdminStaff } from "@/modules/api/mock/dashboard";
import type { Locale } from "@/modules/i18n";
import type { AdminStaffItem } from "@/modules/interface/api/dashboard";

export const StaffView = () => {
  const { t, i18n } = useTranslation();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [staffList, setStaffList] = useState<AdminStaffItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    void getAdminStaff().then((res) => {
      if (!cancelled && res.success && res.data) {
        setStaffList(res.data);
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
          {t("dashboard.admin.pages.staff.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.admin.pages.staff.subtitle")}
        </p>
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
        {staffList.map((staff) => (
          <Card
            key={staff.id}
            className="flex flex-col justify-between bg-bg-surface shadow-card border border-border"
          >
            <div>
              <CardHeader className="flex flex-row justify-between items-start gap-2">
                <span className="flex justify-center items-center bg-primary-light rounded-full size-10 text-primary shrink-0">
                  <UserCog className="size-5" />
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${
                    staff.available
                      ? "bg-success-bg text-success-text"
                      : "bg-warning-bg text-warning-text border border-warning-border"
                  }`}
                >
                  {staff.available
                    ? t("dashboard.admin.pages.staff.available")
                    : t("dashboard.admin.pages.staff.busy")}
                </span>
              </CardHeader>
              <CardContent className="space-y-1.5 pt-3">
                <p className="font-semibold text-text-primary text-base">
                  {staff.name[locale]}
                </p>
                <p className="text-text-body text-xs">
                  {staff.specialty[locale]}
                </p>
                <p className="flex items-center gap-1.5 pt-1 text-text-muted text-xs">
                  <Briefcase className="size-3.5 shrink-0" />
                  <span>{staff.workload[locale]}</span>
                </p>
              </CardContent>
            </div>
            <CardFooter className="bg-transparent border-t border-border">
              <Button
                type="button"
                size="sm"
                disabled={!staff.available}
                className="bg-primary hover:bg-primary-hover w-full text-text-inverse cursor-pointer"
              >
                <ClipboardCheck className="size-4" />
                <span>{t("dashboard.admin.pages.staff.assignAction")}</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
