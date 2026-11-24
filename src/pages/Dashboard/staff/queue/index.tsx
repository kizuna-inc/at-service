import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getStaffQueue } from "@/modules/api/mock/dashboard";
import type { StaffQueueItem } from "@/modules/interface/api/dashboard";

import { StaffQueueCard } from "./StaffQueueCard";

export const StaffQueueView = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState<StaffQueueItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    void getStaffQueue().then((res) => {
      if (!cancelled && res.success && res.data) {
        setItems(res.data);
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
          {t("dashboard.staff.menu.queue")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.staff.subtitle")}
        </p>
      </div>
      <StaffQueueCard items={items} />
    </div>
  );
};
