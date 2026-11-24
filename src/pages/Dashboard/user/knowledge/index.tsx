import { useEffect, useState } from "react";
import { BookOpen, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getKnowledgeArticles } from "@/modules/api/mock/knowledge";
import type { Locale } from "@/modules/i18n";
import type { KnowledgeArticle } from "@/modules/interface/api/knowledge";

export const KnowledgeView = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const locale: Locale = i18n.language === "en" ? "en" : "th";
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState<KnowledgeArticle[]>([]);

  useEffect(() => {
    let cancelled = false;
    void getKnowledgeArticles().then((res) => {
      if (!cancelled && res.success && res.data) {
        setArticles(res.data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const normalized = query.trim().toLowerCase();
  const filtered = articles.filter((article) => {
    if (!normalized) return true;
    return (
      article.title[locale].toLowerCase().includes(normalized) ||
      article.summary[locale].toLowerCase().includes(normalized) ||
      article.tag[locale].toLowerCase().includes(normalized)
    );
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-text-primary text-2xl">
          {t("dashboard.user.pages.knowledge.title")}
        </h1>
        <p className="mt-1 text-text-muted text-sm">
          {t("dashboard.user.pages.knowledge.subtitle")}
        </p>
      </div>

      <div className="relative max-w-md">
        <Search className="top-1/2 left-3 absolute size-4 text-text-muted -translate-y-1/2" />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("dashboard.user.pages.knowledge.searchPlaceholder")}
          className="bg-bg-surface py-2.5 pl-9 border-border-input h-auto"
        />
      </div>

      {filtered.length === 0 ? (
        <Card className="bg-bg-surface shadow-card border border-border">
          <CardContent className="py-8 text-text-muted text-sm text-center">
            {t("dashboard.user.pages.knowledge.empty")}
          </CardContent>
        </Card>
      ) : (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          {filtered.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col bg-bg-surface shadow-card border border-border"
            >
              <CardHeader className="flex flex-row justify-between items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium text-xs ${article.badgeClass}`}
                >
                  {article.tag[locale]}
                </span>
                <BookOpen className="size-4 text-text-muted" />
              </CardHeader>
              <CardContent className="flex-1 space-y-1.5">
                <p className="font-semibold text-text-primary text-base">
                  {article.title[locale]}
                </p>
                <p className="text-text-muted text-sm">
                  {article.summary[locale]}
                </p>
              </CardContent>
              <CardFooter className="bg-transparent border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    navigate(`/dashboard/user/knowledge/${article.id}`)
                  }
                  className="hover:bg-primary-light border-border-input text-text-primary cursor-pointer"
                >
                  {t("dashboard.user.pages.knowledge.readGuide")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
