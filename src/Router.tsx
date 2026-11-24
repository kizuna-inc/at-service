import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./pages/Home";

import { Login } from "./pages/Login";
import { ForgotPassword } from "./pages/ForgotPassword";
import { DashboardMain, DashboardRedirect } from "./pages/Dashboard";
import { AdminDashboard } from "./pages/Dashboard/AdminDashboard";
import { AdminOverviewView } from "./pages/Dashboard/admin/overview";
import { AdminReportsView } from "./pages/Dashboard/admin/reports";
import { DevicesView } from "./pages/Dashboard/admin/devices";
import { StaffView } from "./pages/Dashboard/admin/staff";
import { UsersView } from "./pages/Dashboard/admin/users";
import { StaffDashboard } from "./pages/Dashboard/StaffDashboard";
import { StaffOverviewView } from "./pages/Dashboard/staff/overview";
import { StaffQueueView } from "./pages/Dashboard/staff/queue";
import { StaffRepairsView } from "./pages/Dashboard/staff/repairs";
import { StaffReportsView } from "./pages/Dashboard/staff/reports";
import { StaffScheduleView } from "./pages/Dashboard/staff/schedule";
import { UserDashboard } from "./pages/Dashboard/UserDashboard";
import { HelpRequestsView } from "./pages/Dashboard/user/requests";
import { NewRequestView } from "./pages/Dashboard/user/requests/NewRequestView";
import { HelpersView } from "./pages/Dashboard/user/helpers";
import { KnowledgeArticleView } from "./pages/Dashboard/user/knowledge/ArticleView";
import { KnowledgeView } from "./pages/Dashboard/user/knowledge";
import { RepairServicesView } from "./pages/Dashboard/user/repair";
import { ReportsView } from "./pages/Dashboard/user/reports";
import { SettingsView } from "./pages/Dashboard/user/settings";
import { UserHomeView } from "./pages/Dashboard/user/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Path */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route element={<DashboardMain />}>
            <Route index element={<DashboardRedirect />} />

            <Route path="user" element={<UserDashboard />}>
              <Route index element={<UserHomeView />} />
              <Route path="requests" element={<HelpRequestsView />} />
              <Route path="requests/new" element={<NewRequestView />} />
              <Route path="repair" element={<RepairServicesView />} />
              <Route path="helpers" element={<HelpersView />} />
              <Route path="knowledge" element={<KnowledgeView />} />
              <Route
                path="knowledge/:articleId"
                element={<KnowledgeArticleView />}
              />
              <Route path="reports" element={<ReportsView />} />
              <Route path="settings" element={<SettingsView />} />
            </Route>

            <Route path="staff" element={<StaffDashboard />}>
              <Route index element={<StaffOverviewView />} />
              <Route path="queue" element={<StaffQueueView />} />
              <Route path="repairs" element={<StaffRepairsView />} />
              <Route path="schedule" element={<StaffScheduleView />} />
              <Route path="reports" element={<StaffReportsView />} />
              <Route path="settings" element={<SettingsView />} />
            </Route>

            <Route path="admin" element={<AdminDashboard />}>
              <Route index element={<AdminOverviewView />} />
              <Route path="users" element={<UsersView />} />
              <Route path="staff" element={<StaffView />} />
              <Route path="devices" element={<DevicesView />} />
              <Route path="reports" element={<AdminReportsView />} />
              <Route path="settings" element={<SettingsView />} />
            </Route>

            <Route path="*" element={<DashboardRedirect />} />
          </Route>
        </Route>

        {/* Error Handling */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
