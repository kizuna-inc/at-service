import type { KnowledgeArticle } from "@/modules/interface/api/knowledge";

import { ApiResponse } from "../responseClass";
import { mock_knowledge_db } from "./db";

export const getKnowledgeArticles = async (): Promise<
  ApiResponse<KnowledgeArticle[]>
> => {
  return ApiResponse.ok(mock_knowledge_db, "Articles fetched", 200);
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
