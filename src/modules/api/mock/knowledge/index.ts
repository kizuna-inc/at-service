import type {
  CreateKnowledgeArticleInput,
  KnowledgeArticle,
  KnowledgeTagKey,
  LocalizedText,
} from "@/modules/interface/api/knowledge";

import { ApiResponse } from "../responseClass";
import { mock_knowledge_db } from "../db/dashboard/knowledge";

const TAG_META: Record<
  KnowledgeTagKey,
  { badgeClass: string; tag: LocalizedText }
> = {
  screenReader: {
    badgeClass: "bg-a11y-screenreader text-text-inverse",
    tag: { en: "Screen Reader", th: "โปรแกรมอ่านหน้าจอ" },
  },
  visual: {
    badgeClass: "bg-a11y-textsize text-text-inverse",
    tag: { en: "Visual", th: "การมองเห็น" },
  },
  voiceControl: {
    badgeClass: "bg-a11y-voice text-text-inverse",
    tag: { en: "Voice Control", th: "สั่งการด้วยเสียง" },
  },
  maintenance: {
    badgeClass: "bg-primary-light text-primary",
    tag: { en: "Maintenance", th: "การดูแลรักษา" },
  },
};

export const getKnowledgeArticles = async (): Promise<
  ApiResponse<KnowledgeArticle[]>
> => {
  return ApiResponse.ok([...mock_knowledge_db], "Articles fetched", 200);
};

export const getKnowledgeArticleById = async (
  id: string,
): Promise<ApiResponse<KnowledgeArticle>> => {
  const article = mock_knowledge_db.find((item) => item.id === id);

  if (!article) {
    return ApiResponse.error<KnowledgeArticle>("Article not found", 404);
  }

  return ApiResponse.ok(article, "Article fetched", 200);
};

export const createKnowledgeArticle = async (
  input: CreateKnowledgeArticleInput,
): Promise<ApiResponse<KnowledgeArticle>> => {
  const title = input.title.trim();
  const summary = input.summary.trim();
  const content = input.content.trim();

  if (!title || !summary || !content) {
    return ApiResponse.error<KnowledgeArticle>(
      "Title, summary, and content are required",
      400,
    );
  }

  const tagMeta = TAG_META[input.tagKey];
  const readMinutes = Math.max(1, Math.round(input.readMinutes) || 1);

  const created: KnowledgeArticle = {
    id: crypto.randomUUID(),
    badgeClass: tagMeta.badgeClass,
    updatedAt: new Date().toISOString().slice(0, 10),
    readMinutes,
    tag: tagMeta.tag,
    title: { en: title, th: title },
    summary: { en: summary, th: summary },
    sections: [
      {
        heading: { en: "Overview", th: "รายละเอียดคู่มือ" },
        body: { en: content, th: content },
      },
    ],
  };

  mock_knowledge_db.unshift(created);
  return ApiResponse.ok(created, "Article created", 201);
};
