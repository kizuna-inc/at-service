import Swal from "sweetalert2";

import { i18n } from "@/modules/i18n";

export const showDemoAlert = () => {
  void Swal.fire({
    icon: "info",
    title: i18n.t("demoAlert.title"),
    text: i18n.t("demoAlert.text"),
    confirmButtonText: i18n.t("demoAlert.confirm"),
  });
};
