import type {
  AdminDeviceItem,
  AdminOverviewData,
  AdminReportsData,
  AdminStaffItem,
  AdminUserItem,
} from "@/modules/interface/api/dashboard";

import {
  mock_admin_overview_db,
  mock_admin_users_db,
  mock_admin_staff_db,
  mock_admin_devices_db,
  mock_admin_reports_db,
} from "@/modules/api/mock/db/dashboard";

import { ApiResponse } from "../responseClass";

export const getAdminOverview = async (): Promise<
  ApiResponse<AdminOverviewData>
> => {
  return ApiResponse.ok(mock_admin_overview_db, "Admin overview fetched", 200);
};

export const getAdminUsers = async (): Promise<
  ApiResponse<AdminUserItem[]>
> => {
  return ApiResponse.ok(mock_admin_users_db, "Admin users fetched", 200);
};

export const getAdminStaff = async (): Promise<
  ApiResponse<AdminStaffItem[]>
> => {
  return ApiResponse.ok(mock_admin_staff_db, "Admin staff fetched", 200);
};

export const getAdminDevices = async (): Promise<
  ApiResponse<AdminDeviceItem[]>
> => {
  return ApiResponse.ok(mock_admin_devices_db, "Admin devices fetched", 200);
};

export const getAdminReports = async (): Promise<
  ApiResponse<AdminReportsData>
> => {
  return ApiResponse.ok(mock_admin_reports_db, "Admin reports fetched", 200);
};
