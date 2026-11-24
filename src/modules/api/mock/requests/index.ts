import type {
  CreateHelpRequestInput,
  HelpRequest,
} from "@/modules/interface/api/requests";

import { ApiResponse } from "../responseClass";
import { mock_requests_db } from "@/modules/api/mock/db/dashboard/requests";

export const getHelpRequests = async (): Promise<
  ApiResponse<HelpRequest[]>
> => {
  return ApiResponse.ok([...mock_requests_db], "Requests fetched", 200);
};

export const createHelpRequest = async (
  input: CreateHelpRequestInput,
): Promise<ApiResponse<HelpRequest>> => {
  const title = input.title.trim();
  const description = input.description.trim();

  if (!title || !description) {
    return ApiResponse.error<HelpRequest>(
      "Title and description are required",
      400,
    );
  }

  const device = input.device?.trim() || undefined;
  const preferredDate = input.preferredDate?.trim() || undefined;

  const created: HelpRequest = {
    id: crypto.randomUUID(),
    title: { en: title, th: title },
    category: input.category,
    meta: {
      en: ["Submitted just now", device, preferredDate]
        .filter(Boolean)
        .join(" · "),
      th: ["ส่งคำขอเมื่อสักครู่", device, preferredDate]
        .filter(Boolean)
        .join(" · "),
    },
    status: "pending",
    urgency: input.urgency,
    device,
    description,
    preferredDate,
  };

  mock_requests_db.unshift(created);
  return ApiResponse.ok(created, "Request created", 201);
};
