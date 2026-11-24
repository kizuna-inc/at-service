import { useTranslation } from "react-i18next";

import { StaffQueueCard } from "./StaffQueueCard";

export const StaffQueueView = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.staff.menu.queue")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.staff.subtitle")}
        </p>
      </div>
      <StaffQueueCard />
    </div>
  );
};
