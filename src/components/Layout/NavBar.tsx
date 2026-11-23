import { useNavigate } from "react-router-dom";
import { Globe, LogIn, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/modules/i18n";

const LOGIN_STATUS_KEY = "isLoggedIn";

const checkLoginStatus = (): boolean => {
  const status = localStorage.getItem(LOGIN_STATUS_KEY);
  return Boolean(status && status !== "false");
};

export const Navbar = () => {
  const navigate = useNavigate();
  const { locale, toggleLocale, t } = useI18n();
  const isLoggedIn = checkLoginStatus();

  return (
    <div className="bg-brand-navy w-full">
      <div className="flex flex-row justify-between items-center mx-auto py-4 w-full md:w-9/10 h-16">
        <div className="flex justify-start items-center w-fit">
          <a href="#" className="font-bold text-white">
            <span className="text-brand-accent">AT</span> Care Connect
          </a>
        </div>
        <div className="flex justify-end items-center gap-2 w-fit">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={t("nav.search")}
            className="text-text-inverse hover:bg-brand-navy-hover hover:text-text-inverse cursor-pointer"
          >
            <Search className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            aria-label={t("nav.switchLanguage")}
            className="text-text-inverse hover:bg-brand-navy-hover hover:text-text-inverse cursor-pointer"
          >
            <Globe className="size-4" />
            <span>{locale.toUpperCase()}</span>
          </Button>
          {!isLoggedIn && (
            <Button
              type="button"
              size="sm"
              onClick={() => navigate("/login")}
              className="bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
            >
              <LogIn className="size-4" />
              <span>{t("nav.login")}</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
