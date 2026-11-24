import type { Locale } from "@/modules/i18n";

export type LocalizedText = Record<Locale, string>;

export type KnowledgeTagKey =
  | "screenReader"
  | "visual"
  | "voiceControl"
  | "maintenance";

export interface KnowledgeArticleSection {
  heading: LocalizedText;
  body: LocalizedText;
}

export interface KnowledgeArticle {
  id: string;
  badgeClass: string;
  updatedAt: string;
  readMinutes: number;
  tag: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  sections: KnowledgeArticleSection[];
}

export interface CreateKnowledgeArticleInput {
  title: string;
  summary: string;
  content: string;
  tagKey: KnowledgeTagKey;
  readMinutes: number;
}
