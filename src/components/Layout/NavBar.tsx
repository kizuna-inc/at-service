import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, LogIn, LogOut, Search, User } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import type { loginDetailInterface } from "@/modules/interface/api/auth/login";

import { AccessibilityMenu } from "./AccessibilityMenu";

const LOGIN_STATUS_KEY = "isLoggedIn";
const USER_DETAIL_KEY = "userDetail";

const checkLoginStatus = (): boolean => {
  const status = localStorage.getItem(LOGIN_STATUS_KEY);
  return Boolean(status && status !== "false");
};

const getUserDetail = (): loginDetailInterface | null => {
  const raw = localStorage.getItem(USER_DETAIL_KEY);
  if (!raw) return null;

  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;

    const record = parsed as Record<string, unknown>;
    const detail = record.detail;
    if (
      typeof record.username !== "string" ||
      typeof detail !== "object" ||
      detail === null
    ) {
      return null;
    }

    const detailRecord = detail as Record<string, unknown>;
    if (
      typeof detailRecord.name !== "string" ||
      (detailRecord.role !== "user" &&
        detailRecord.role !== "admin" &&
        detailRecord.role !== "staff")
    ) {
      return null;
    }

    return {
      username: record.username,
      detail: {
        name: detailRecord.name,
        role: detailRecord.role,
      },
    };
  } catch {
    return null;
  }
};

export const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "en" ? "en" : "th";
  const toggleLocale = () => {
    void i18n.changeLanguage(locale === "th" ? "en" : "th");
  };
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(checkLoginStatus);
  const [userDetail, setUserDetail] = useState<loginDetailInterface | null>(
    getUserDetail,
  );

  const handleLogout = () => {
    localStorage.removeItem(LOGIN_STATUS_KEY);
    localStorage.removeItem(USER_DETAIL_KEY);
    setIsLoggedIn(false);
    setUserDetail(null);
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-brand-navy w-full">
      <div className="flex flex-row justify-between items-center mx-auto py-4 w-95/100 md:w-9/10 h-16">
        <div className="flex justify-start items-center w-fit">
          <a href="#" className="hover:opacity-60 font-bold text-white">
            <span className="text-brand-accent">AT</span> Care Connect
          </a>
        </div>
        <div className="flex justify-end items-center gap-2 w-fit">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={t("nav.search")}
            className="hover:bg-brand-navy-hover text-text-inverse hover:text-text-inverse cursor-pointer"
          >
            <Search className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            aria-label={t("nav.switchLanguage")}
            className="hover:bg-brand-navy-hover text-text-inverse hover:text-text-inverse cursor-pointer"
          >
            <Globe className="size-4" />
            <span>{locale.toUpperCase()}</span>
          </Button>
          <AccessibilityMenu />
          {!isLoggedIn ? (
            <Button
              type="button"
              size="sm"
              onClick={() => navigate("/login")}
              className="flex justify-center items-center bg-primary hover:bg-primary-hover min-w-22 text-text-inverse cursor-pointer"
            >
              <LogIn className="size-4" />
              <span>{t("nav.login")}</span>
            </Button>
          ) : (
            <>
              {userDetail && (
                <div className="flex items-center gap-2 bg-brand-navy-hover px-2.5 py-1 rounded-md text-text-inverse text-sm">
                  <User className="size-4 text-brand-accent shrink-0" />
                  <span className="max-w-36 font-medium truncate">
                    {userDetail.detail.name}
                  </span>
                  <span className="bg-primary/20 px-1.5 py-0.5 rounded font-medium text-brand-accent text-xs">
                    {t(`roles.${userDetail.detail.role}`)}
                  </span>
                </div>
              )}
              <Button
                type="button"
                size="sm"
                onClick={handleLogout}
                className="flex justify-center items-center bg-danger-text hover:bg-danger-text/90 min-w-22 text-text-inverse cursor-pointer"
              >
                <LogOut className="size-4" />
                <span>{t("nav.logout")}</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
