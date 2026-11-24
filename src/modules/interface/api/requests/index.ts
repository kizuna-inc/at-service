import type { Locale } from "@/modules/i18n";

export type RequestStatus = "pending" | "inProgress" | "completed";
export type RequestCategory = "software" | "assessment" | "training" | "repair";
export type RequestUrgency = "normal" | "urgent";

export interface HelpRequest {
  id: string;
  title: Record<Locale, string>;
  category: RequestCategory;
  meta: Record<Locale, string>;
  status: RequestStatus;
  urgency: RequestUrgency;
  device?: string;
  description?: string;
  preferredDate?: string;
}

export interface CreateHelpRequestInput {
  title: string;
  category: RequestCategory;
  description: string;
  urgency: RequestUrgency;
  device?: string;
  preferredDate?: string;
}
