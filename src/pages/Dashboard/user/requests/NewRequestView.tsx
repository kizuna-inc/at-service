import { type FormEvent, useState } from "react";
import { AlertCircle, ArrowLeft, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createHelpRequest } from "@/modules/api/mock/requests";
import type {
  RequestCategory,
  RequestUrgency,
} from "@/modules/interface/api/requests";

const CATEGORIES: RequestCategory[] = [
  "software",
  "assessment",
  "training",
  "repair",
];

export const NewRequestView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<RequestCategory>("software");
  const [device, setDevice] = useState("");
  const [urgency, setUrgency] = useState<RequestUrgency>("normal");
  const [preferredDate, setPreferredDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError(t("dashboard.user.pages.requests.form.validationError"));
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      const res = await createHelpRequest({
        title,
        category,
        device,
        urgency,
        preferredDate,
        description,
      });

      if (!res.success) {
        setError(t("dashboard.user.pages.requests.form.validationError"));
        return;
      }

      navigate("/dashboard/user/requests", { state: { created: true } });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => navigate("/dashboard/user/requests")}
        className="hover:bg-primary-light -ml-2 text-text-primary cursor-pointer"
      >
        <ArrowLeft className="size-4" />
        <span>{t("dashboard.user.pages.requests.form.backToList")}</span>
      </Button>

      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.user.pages.requests.form.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.user.pages.requests.form.subtitle")}
        </p>
      </div>

      <Card className="bg-bg-surface shadow-card border border-border">
        <form onSubmit={handleSubmit} noValidate>
          <CardContent className="space-y-5 py-2">
            {error && (
              <Alert
                variant="destructive"
                className="bg-danger-bg-hover border-danger-border text-danger-text"
              >
                <AlertCircle className="size-4" />
                <AlertDescription className="text-danger-text">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="request-subject" className="text-text-primary">
                {t("dashboard.user.pages.requests.form.subjectLabel")}
              </Label>
              <Input
                id="request-subject"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t(
                  "dashboard.user.pages.requests.form.subjectPlaceholder",
                )}
                className="bg-bg-surface py-2.5 border-border-input h-auto"
              />
            </div>

            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="request-category" className="text-text-primary">
                  {t("dashboard.user.pages.requests.form.categoryLabel")}
                </Label>
                <select
                  id="request-category"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value as RequestCategory)
                  }
                  className="bg-bg-surface px-2.5 py-2.5 border border-border-input rounded-lg outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 w-full text-text-primary text-sm"
                >
                  {CATEGORIES.map((item) => (
                    <option key={item} value={item}>
                      {t(`dashboard.user.pages.requests.categories.${item}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="request-device" className="text-text-primary">
                  {t("dashboard.user.pages.requests.form.deviceLabel")}
                </Label>
                <Input
                  id="request-device"
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  placeholder={t(
                    "dashboard.user.pages.requests.form.devicePlaceholder",
                  )}
                  className="bg-bg-surface py-2.5 border-border-input h-auto"
                />
              </div>
            </div>

            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
              <div className="space-y-2">
                <span className="block font-medium text-text-primary text-sm">
                  {t("dashboard.user.pages.requests.form.urgencyLabel")}
                </span>
                <div className="flex gap-2">
                  {(["normal", "urgent"] as const).map((level) => {
                    const active = urgency === level;
                    const labelKey =
                      level === "normal" ? "urgencyNormal" : "urgencyUrgent";
                    return (
                      <Button
                        key={level}
                        type="button"
                        size="sm"
                        variant={active ? "default" : "outline"}
                        aria-pressed={active}
                        onClick={() => setUrgency(level)}
                        className={
                          active
                            ? "flex-1 bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
                            : "flex-1 border-border-input hover:bg-primary-light text-text-primary cursor-pointer"
                        }
                      >
                        {t(`dashboard.user.pages.requests.form.${labelKey}`)}
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="request-date" className="text-text-primary">
                  {t("dashboard.user.pages.requests.form.preferredDateLabel")}
                </Label>
                <Input
                  id="request-date"
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="bg-bg-surface py-2.5 border-border-input h-auto"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="request-details" className="text-text-primary">
                {t("dashboard.user.pages.requests.form.descriptionLabel")}
              </Label>
              <textarea
                id="request-details"
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t(
                  "dashboard.user.pages.requests.form.descriptionPlaceholder",
                )}
                className="bg-bg-surface px-2.5 py-2 border border-border-input rounded-lg outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 w-full text-text-primary placeholder:text-muted-foreground text-sm resize-y"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
              >
                <Send className="size-4" />
                <span>{t("dashboard.user.pages.requests.form.submit")}</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/dashboard/user/requests")}
                className="hover:bg-primary-light border-border-input text-text-primary cursor-pointer"
              >
                {t("dashboard.user.pages.requests.form.cancel")}
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};
