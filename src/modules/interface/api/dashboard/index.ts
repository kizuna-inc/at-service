import type { Locale } from "@/modules/i18n";

export type LocalizedText = Record<Locale, string>;

export type TimelineStepState = "done" | "current" | "upcoming";

export interface TrackingTimelineStep {
  id: string;
  number: number;
  state: TimelineStepState;
  title: LocalizedText;
  time: LocalizedText;
  detail: LocalizedText;
}

export interface TrackingActivityItem {
  id: string;
  status: "inProgress" | "completed";
  time: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
}

export interface UserTrackingData {
  id: string;
  requestCode: string;
  status: "inProgress" | "cancelled";
  updatedAt: LocalizedText;
  device: LocalizedText;
  issue: LocalizedText;
  helper: {
    name: LocalizedText;
    role: LocalizedText;
    center: LocalizedText;
  };
  timelineSteps: TrackingTimelineStep[];
  activityItems: TrackingActivityItem[];
}

export interface UserDeviceItem {
  id: string;
  name: LocalizedText;
  meta: LocalizedText;
}

export interface UserRepairTicket {
  id: string;
  title: LocalizedText;
  meta: LocalizedText;
  status: "inProgress" | "completed";
}

export interface UserRepairData {
  devices: UserDeviceItem[];
  tickets: UserRepairTicket[];
}

export interface HelperProfile {
  id: string;
  name: LocalizedText;
  specialty: LocalizedText;
  schedule: LocalizedText;
  available: boolean;
}

export interface ReportLogItem {
  id: string;
  title: LocalizedText;
  date: LocalizedText;
  result: LocalizedText;
}

export interface UserReportsData {
  stats: {
    totalRequests: string;
    completedServices: string;
    hoursAssisted: string;
  };
  history: ReportLogItem[];
}

export type StaffQueueStatus = "pending" | "inProgress" | "completed";

export interface StaffQueueItem {
  id: string;
  title: LocalizedText;
  meta: LocalizedText;
  status: StaffQueueStatus;
}

export interface StaffOverviewData {
  stats: {
    pendingQueue: string;
    inProgress: string;
    completedToday: string;
  };
  queue: StaffQueueItem[];
}

export interface StaffRepairItem {
  id: string;
  title: LocalizedText;
  device: LocalizedText;
  meta: LocalizedText;
  status: StaffQueueStatus;
}

export interface StaffScheduleItem {
  id: string;
  title: LocalizedText;
  time: LocalizedText;
  meta: LocalizedText;
  status: StaffQueueStatus;
}

export interface StaffReportsData {
  stats: {
    completedCases: string;
    avgTurnaround: string;
    satisfaction: string;
  };
  logs: ReportLogItem[];
}

export type AdminOverviewStatus = "active" | "pending" | "completed";

export interface AdminOverviewItem {
  id: string;
  title: LocalizedText;
  meta: LocalizedText;
  status: AdminOverviewStatus;
}

export interface AdminOverviewData {
  stats: {
    totalUsers: string;
    activeStaff: string;
    openRequests: string;
  };
  overviewItems: AdminOverviewItem[];
}

export interface AdminUserItem {
  id: string;
  name: LocalizedText;
  username: string;
  meta: LocalizedText;
  status: "active" | "pending";
}

export interface AdminStaffItem {
  id: string;
  name: LocalizedText;
  specialty: LocalizedText;
  workload: LocalizedText;
  available: boolean;
}

export interface AdminDeviceItem {
  id: string;
  name: LocalizedText;
  category: LocalizedText;
  meta: LocalizedText;
  status: "active" | "inProgress" | "pending";
}

export interface AdminReportsData {
  stats: {
    totalCases: string;
    resolvedRate: string;
    avgResponse: string;
  };
  logs: ReportLogItem[];
}
