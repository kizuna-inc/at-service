import type { LocalizedText } from "../dashboard";

export interface ProfileEmergencyContact {
  name: LocalizedText;
  relation: LocalizedText;
  phone: string;
}

export interface ProfileAssignedDevice {
  code: string;
  name: LocalizedText;
}

export interface UserProfile {
  id: string;
  username: string;
  role: "user" | "staff" | "admin";
  status: "active" | "pending";
  name: LocalizedText;
  email: string;
  phone: string;
  address: LocalizedText;
  department: LocalizedText;
  bio: LocalizedText;
  emergencyContact: ProfileEmergencyContact;
  assistiveNeeds: LocalizedText[];
  assignedDevices: ProfileAssignedDevice[];
}

export interface GetProfileQuery {
  id?: string;
  username?: string;
}
