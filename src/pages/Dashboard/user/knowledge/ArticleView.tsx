import { useEffect, useState } from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getKnowledgeArticleById } from "@/modules/api/mock/knowledge";
import type { Locale } from "@/modules/i18n";
import type { KnowledgeArticle } from "@/modules/interface/api/knowledge";

export const KnowledgeArticleView = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [result, setResult] = useState<{
    id: string;
    article: KnowledgeArticle | null;
  } | null>(null);

  useEffect(() => {
    if (!articleId) return;
    let cancelled = false;
    void getKnowledgeArticleById(articleId).then((res) => {
      if (!cancelled) {
        setResult({
          id: articleId,
          article: res.success ? res.data : null,
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [articleId]);

  const loading = Boolean(articleId) && result?.id !== articleId;
  const article =
    articleId && result?.id === articleId ? result.article : null;

  return (
    <div className="space-y-6">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => navigate("/dashboard/user/knowledge")}
        className="hover:bg-primary-light -ml-2 text-text-primary cursor-pointer"
      >
        <ArrowLeft className="size-4" />
        <span>{t("dashboard.user.pages.knowledge.backToGuides")}</span>
      </Button>

      {loading ? null : !article ? (
        <Card className="bg-bg-surface shadow-card border border-border">
          <CardContent className="py-8 text-text-muted text-sm text-center">
            {t("dashboard.user.pages.knowledge.notFound")}
          </CardContent>
        </Card>
      ) : (
        <article className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${article.badgeClass}`}
              >
                {article.tag[locale]}
              </span>
              <span className="flex items-center gap-1 text-text-muted text-xs">
                <Clock className="size-3.5" />
                <span>
                  {t("dashboard.user.pages.knowledge.readTime", {
                    minutes: article.readMinutes,
                  })}
                </span>
              </span>
              <span className="text-text-muted text-xs">
                {t("dashboard.user.pages.knowledge.updatedLabel")}:{" "}
                {article.updatedAt}
              </span>
            </div>
            <h1 className="font-bold text-text-primary text-2xl">
              {article.title[locale]}
            </h1>
            <p className="text-text-muted text-sm">{article.summary[locale]}</p>
          </div>

          <Card className="bg-bg-surface shadow-card border border-border">
            <CardContent className="space-y-6 py-2">
              {article.sections.map((section) => (
                <section key={section.heading.en} className="space-y-1.5">
                  <h2 className="font-semibold text-text-primary text-base">
                    {section.heading[locale]}
                  </h2>
                  <p className="text-text-body text-sm leading-relaxed">
                    {section.body[locale]}
                  </p>
                </section>
              ))}
            </CardContent>
          </Card>
        </article>
      )}
    </div>
  );
};
