import { type FormEvent, useState } from "react";
import { AlertCircle, ArrowLeft, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createKnowledgeArticle } from "@/modules/api/mock/knowledge";
import type { KnowledgeTagKey } from "@/modules/interface/api/knowledge";

import { useDashboardUser } from "../..";

const TAG_OPTIONS: KnowledgeTagKey[] = [
  "screenReader",
  "visual",
  "voiceControl",
  "maintenance",
];

export const NewArticleView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useDashboardUser();

  const [title, setTitle] = useState("");
  const [tagKey, setTagKey] = useState<KnowledgeTagKey>("screenReader");
  const [readMinutes, setReadMinutes] = useState("4");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (user.detail.role === "user") {
    return <Navigate to="/dashboard/user/knowledge" replace />;
  }

  const basePath = `/dashboard/${user.detail.role}/knowledge`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim() || !content.trim()) {
      setError(t("dashboard.user.pages.knowledge.form.validationError"));
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      const res = await createKnowledgeArticle({
        title,
        tagKey,
        readMinutes: Number(readMinutes) || 1,
        summary,
        content,
      });

      if (!res.success) {
        setError(t("dashboard.user.pages.knowledge.form.validationError"));
        return;
      }

      navigate(basePath);
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
        onClick={() => navigate(basePath)}
        className="hover:bg-primary-light -ml-2 text-text-primary cursor-pointer"
      >
        <ArrowLeft className="size-4" />
        <span>{t("dashboard.user.pages.knowledge.backToGuides")}</span>
      </Button>

      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.user.pages.knowledge.form.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.user.pages.knowledge.form.subtitle")}
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
              <Label htmlFor="article-title" className="text-text-primary">
                {t("dashboard.user.pages.knowledge.form.articleTitleLabel")}
              </Label>
              <Input
                id="article-title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t(
                  "dashboard.user.pages.knowledge.form.articleTitlePlaceholder",
                )}
                className="bg-bg-surface py-2.5 border-border-input h-auto"
              />
            </div>

            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="article-tag" className="text-text-primary">
                  {t("dashboard.user.pages.knowledge.form.tagLabel")}
                </Label>
                <select
                  id="article-tag"
                  value={tagKey}
                  onChange={(e) =>
                    setTagKey(e.target.value as KnowledgeTagKey)
                  }
                  className="bg-bg-surface px-2.5 py-2.5 border border-border-input rounded-lg outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 w-full text-text-primary text-sm"
                >
                  {TAG_OPTIONS.map((key) => (
                    <option key={key} value={key}>
                      {t(`dashboard.user.pages.knowledge.form.tags.${key}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="article-read-minutes"
                  className="text-text-primary"
                >
                  {t("dashboard.user.pages.knowledge.form.readMinutesLabel")}
                </Label>
                <Input
                  id="article-read-minutes"
                  type="number"
                  min={1}
                  max={60}
                  value={readMinutes}
                  onChange={(e) => setReadMinutes(e.target.value)}
                  className="bg-bg-surface py-2.5 border-border-input h-auto"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="article-summary" className="text-text-primary">
                {t("dashboard.user.pages.knowledge.form.summaryLabel")}
              </Label>
              <Input
                id="article-summary"
                required
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder={t(
                  "dashboard.user.pages.knowledge.form.summaryPlaceholder",
                )}
                className="bg-bg-surface py-2.5 border-border-input h-auto"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="article-content" className="text-text-primary">
                {t("dashboard.user.pages.knowledge.form.contentLabel")}
              </Label>
              <textarea
                id="article-content"
                required
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={t(
                  "dashboard.user.pages.knowledge.form.contentPlaceholder",
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
                <Plus className="size-4" />
                <span>{t("dashboard.user.pages.knowledge.form.submit")}</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(basePath)}
                className="hover:bg-primary-light border-border-input text-text-primary cursor-pointer"
              >
                {t("dashboard.user.pages.knowledge.form.cancel")}
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};
