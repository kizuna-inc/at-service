import type {
  HelperProfile,
  UserRepairData,
  UserReportsData,
  UserTrackingData,
} from "@/modules/interface/api/dashboard";

import {
  mock_user_helpers_db,
  mock_user_repair_db,
  mock_user_reports_db,
  mock_user_tracking_db,
} from "../db/dashboard";

import { ApiResponse } from "../responseClass";

export const getUserTracking = async (): Promise<
  ApiResponse<UserTrackingData>
> => {
  return ApiResponse.ok(mock_user_tracking_db, "Tracking fetched", 200);
};

export const getUserRepairData = async (): Promise<
  ApiResponse<UserRepairData>
> => {
  return ApiResponse.ok(mock_user_repair_db, "Repair data fetched", 200);
};

export const getUserHelpers = async (): Promise<
  ApiResponse<HelperProfile[]>
> => {
  return ApiResponse.ok(mock_user_helpers_db, "Helpers fetched", 200);
};

export const getUserReports = async (): Promise<
  ApiResponse<UserReportsData>
> => {
  return ApiResponse.ok(mock_user_reports_db, "User reports fetched", 200);
};
