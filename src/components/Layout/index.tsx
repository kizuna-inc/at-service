import { useTranslation } from "react-i18next";

import { type childInterface } from "@/modules/interface/childInterface";

import { Navbar } from "./NavBar";
import { Footer } from "./Footer";

export const Layout = (child: childInterface) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-fit min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text-inverse"
      >
        {t("a11y.skipToContent")}
      </a>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="h-fit min-h-[calc(100dvh-128px)] focus:outline-none"
      >
        {child.children}
      </main>
      <Footer />
    </div>
  );
};
