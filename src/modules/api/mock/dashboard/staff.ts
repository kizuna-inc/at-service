import type {
  StaffOverviewData,
  StaffQueueItem,
  StaffRepairItem,
  StaffReportsData,
  StaffScheduleItem,
} from "@/modules/interface/api/dashboard";

import {
  mock_staff_overview_db,
  mock_staff_queue_db,
  mock_staff_repairs_db,
  mock_staff_schedule_db,
  mock_staff_reports_db,
} from "@/modules/api/mock/db/dashboard";

import { ApiResponse } from "../responseClass";

export const getStaffOverview = async (): Promise<
  ApiResponse<StaffOverviewData>
> => {
  return ApiResponse.ok(mock_staff_overview_db, "Staff overview fetched", 200);
};

export const getStaffQueue = async (): Promise<
  ApiResponse<StaffQueueItem[]>
> => {
  return ApiResponse.ok(mock_staff_queue_db, "Staff queue fetched", 200);
};

export const getStaffQueueById = async (
  id: string,
): Promise<ApiResponse<StaffQueueItem>> => {
  const found = mock_staff_queue_db.find((item) => item.id === id);

  if (!found) {
    return ApiResponse.error<StaffQueueItem>("Queue item not found", 404);
  }

  return ApiResponse.ok(found, "Queue item fetched", 200);
};

export const getStaffRepairs = async (): Promise<
  ApiResponse<StaffRepairItem[]>
> => {
  return ApiResponse.ok(mock_staff_repairs_db, "Staff repairs fetched", 200);
};

export const getStaffSchedule = async (): Promise<
  ApiResponse<StaffScheduleItem[]>
> => {
  return ApiResponse.ok(mock_staff_schedule_db, "Staff schedule fetched", 200);
};

export const getStaffReports = async (): Promise<
  ApiResponse<StaffReportsData>
> => {
  return ApiResponse.ok(mock_staff_reports_db, "Staff reports fetched", 200);
};
