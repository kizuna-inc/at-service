import { useState } from "react";
import { Bell, Globe, User } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useDashboardUser } from "../..";

export const SettingsView = () => {
  const { t, i18n } = useTranslation();
  const user = useDashboardUser();
  const locale = i18n.language === "en" ? "en" : "th";
  const [notifications, setNotifications] = useState(true);

  const changeLocale = (next: "th" | "en") => {
    void i18n.changeLanguage(next);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.user.pages.settings.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.user.pages.settings.subtitle")}
        </p>
      </div>

      <Card className="bg-bg-surface shadow-card border border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-semibold text-text-primary text-base">
            <User className="size-4 text-primary" />
            <span>{t("dashboard.user.pages.settings.profileTitle")}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="gap-4 grid grid-cols-1 sm:grid-cols-3">
          <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
            <p className="text-text-muted text-xs">
              {t("dashboard.user.pages.settings.nameLabel")}
            </p>
            <p className="mt-1 font-medium text-text-primary text-sm">
              {user.detail.name}
            </p>
          </div>
          <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
            <p className="text-text-muted text-xs">
              {t("dashboard.user.pages.settings.usernameLabel")}
            </p>
            <p className="mt-1 font-medium text-text-primary text-sm">
              {user.username}
            </p>
          </div>
          <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
            <p className="text-text-muted text-xs">
              {t("dashboard.user.pages.settings.roleLabel")}
            </p>
            <p className="mt-1 font-medium text-primary text-sm">
              {t(`roles.${user.detail.role}`)}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-bg-surface shadow-card border border-border">
        <CardHeader>
          <CardTitle className="font-semibold text-text-primary text-base">
            {t("dashboard.user.pages.settings.preferencesTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap justify-between items-center gap-3 pb-4 border-b border-border">
            <div className="flex items-center gap-2.5">
              <Globe className="size-4 text-primary" />
              <span className="font-medium text-text-primary text-sm">
                {t("dashboard.user.pages.settings.languageLabel")}
              </span>
            </div>
            <div className="flex gap-2">
              {(["th", "en"] as const).map((lang) => {
                const active = locale === lang;
                return (
                  <Button
                    key={lang}
                    type="button"
                    size="sm"
                    variant={active ? "default" : "outline"}
                    aria-pressed={active}
                    onClick={() => changeLocale(lang)}
                    className={
                      active
                        ? "bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
                        : "border-border-input hover:bg-primary-light text-text-primary cursor-pointer"
                    }
                  >
                    {lang.toUpperCase()}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-3">
            <div className="flex items-start gap-2.5">
              <Bell className="mt-0.5 size-4 text-primary shrink-0" />
              <div>
                <p className="font-medium text-text-primary text-sm">
                  {t("dashboard.user.pages.settings.notificationsLabel")}
                </p>
                <p className="text-text-muted text-xs">
                  {t("dashboard.user.pages.settings.notificationsDesc")}
                </p>
              </div>
            </div>
            <Button
              type="button"
              size="sm"
              variant={notifications ? "default" : "outline"}
              aria-pressed={notifications}
              onClick={() => setNotifications((prev) => !prev)}
              className={
                notifications
                  ? "bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
                  : "border-border-input hover:bg-primary-light text-text-primary cursor-pointer"
              }
            >
              {notifications ? t("a11y.on") : t("a11y.off")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
