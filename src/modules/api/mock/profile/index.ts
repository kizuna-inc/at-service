import type {
  GetProfileQuery,
  UserProfile,
} from "@/modules/interface/api/profile";

import { mock_profiles_db } from "../db/profile";
import { ApiResponse } from "../responseClass";

export const getProfile = async (
  query: GetProfileQuery,
): Promise<ApiResponse<UserProfile>> => {
  const found = query.id
    ? mock_profiles_db.find((item) => item.id === query.id)
    : query.username
      ? mock_profiles_db.find((item) => item.username === query.username)
      : undefined;

  if (!found) {
    return ApiResponse.error<UserProfile>("Profile not found", 404);
  }

  return ApiResponse.ok(found, "Profile fetched", 200);
};
