import { useEffect, useState } from "react";
import { ArrowLeft, Laptop, Phone, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProfile } from "@/modules/api/mock/profile";
import type { Locale } from "@/modules/i18n";
import type { UserProfile } from "@/modules/interface/api/profile";

import { useDashboardUser } from "..";

const STATUS_BADGE_MAP: Record<UserProfile["status"], string> = {
  active: "bg-success-bg text-success-text",
  pending: "bg-warning-bg text-warning-text border border-warning-border",
};

export const ProfileView = () => {
  const { userId } = useParams<{ userId?: string }>();
  const user = useDashboardUser();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const locale: Locale = i18n.language === "en" ? "en" : "th";

  const lookupKey = userId ? `id:${userId}` : `user:${user.username}`;
  const [result, setResult] = useState<{
    key: string;
    profile: UserProfile | null;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const query = userId ? { id: userId } : { username: user.username };

    void getProfile(query).then((res) => {
      if (!cancelled) {
        setResult({
          key: lookupKey,
          profile: res.success ? res.data : null,
        });
      }
    });

    return () => {
      cancelled = true;
    };
  }, [lookupKey, userId, user.username]);

  const loading = result?.key !== lookupKey;
  const profile = result?.key === lookupKey ? result.profile : null;
  const backPath =
    user.detail.role === "admin" ? "/dashboard/admin/users" : "/dashboard/staff";

  return (
    <div className="space-y-6">
      {userId && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => navigate(backPath)}
          className="hover:bg-primary-light -ml-2 text-text-primary cursor-pointer"
        >
          <ArrowLeft className="size-4" />
          <span>{t("dashboard.profile.back")}</span>
        </Button>
      )}

      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.profile.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.profile.subtitle")}
        </p>
      </div>

      {loading ? null : !profile ? (
        <Card className="bg-bg-surface shadow-card border border-border">
          <CardContent className="py-8 text-text-muted text-sm text-center">
            {t("dashboard.profile.notFound")}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="bg-bg-surface shadow-card border border-border">
            <CardHeader className="flex flex-row flex-wrap justify-between items-center gap-2">
              <CardTitle className="flex items-center gap-2 font-semibold text-text-primary text-base">
                <User className="size-4 text-primary" />
                <span>{t("dashboard.profile.basicTitle")}</span>
              </CardTitle>
              <span
                className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${STATUS_BADGE_MAP[profile.status]}`}
              >
                {t(`dashboard.status.${profile.status}`)}
              </span>
            </CardHeader>
            <CardContent className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.nameLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {profile.name[locale]}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.usernameLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {profile.username}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.roleLabel")}
                </p>
                <p className="mt-1 font-medium text-primary text-sm">
                  {t(`roles.${profile.role}`)}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.emailLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm break-all">
                  {profile.email}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.phoneLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {profile.phone}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.userIdLabel")}
                </p>
                <p className="mt-1 font-mono text-text-primary text-xs break-all">
                  {profile.id}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg sm:col-span-2 lg:col-span-1">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.departmentLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {profile.department[locale]}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg sm:col-span-2">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.addressLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {profile.address[locale]}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg sm:col-span-2 lg:col-span-3">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.bioLabel")}
                </p>
                <p className="mt-1 text-text-body text-sm leading-relaxed">
                  {profile.bio[locale]}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-surface shadow-card border border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-semibold text-text-primary text-base">
                <Phone className="size-4 text-primary" />
                <span>{t("dashboard.profile.emergencyTitle")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="gap-4 grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.emergencyNameLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {profile.emergencyContact.name[locale]}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.emergencyRelationLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {profile.emergencyContact.relation[locale]}
                </p>
              </div>
              <div className="bg-bg-subtle/60 p-3.5 border border-border rounded-lg">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.emergencyPhoneLabel")}
                </p>
                <p className="mt-1 font-medium text-text-primary text-sm">
                  {profile.emergencyContact.phone}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-surface shadow-card border border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-semibold text-text-primary text-base">
                <Laptop className="size-4 text-primary" />
                <span>{t("dashboard.profile.assistiveTitle")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.needsLabel")}
                </p>
                {profile.assistiveNeeds.length === 0 ? (
                  <p className="text-text-muted text-sm">
                    {t("dashboard.profile.noNeeds")}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profile.assistiveNeeds.map((need) => (
                      <span
                        key={need.en}
                        className="bg-primary-light px-3 py-1 rounded-full font-medium text-primary text-xs"
                      >
                        {need[locale]}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-text-muted text-xs">
                  {t("dashboard.profile.devicesLabel")}
                </p>
                {profile.assignedDevices.length === 0 ? (
                  <p className="text-text-muted text-sm">
                    {t("dashboard.profile.noDevices")}
                  </p>
                ) : (
                  <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                    {profile.assignedDevices.map((device) => (
                      <div
                        key={device.code}
                        className="flex items-center gap-3 bg-bg-subtle/60 p-3.5 border border-border rounded-lg"
                      >
                        <span className="bg-bg-surface px-2 py-0.5 border border-border rounded font-mono text-text-muted text-xs">
                          {device.code}
                        </span>
                        <span className="font-medium text-text-primary text-sm">
                          {device.name[locale]}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
