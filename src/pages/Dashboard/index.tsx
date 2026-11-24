import { Navigate, Outlet, useOutletContext } from "react-router-dom";

import { Layout } from "@/components/Layout";
import type { loginDetailInterface } from "@/modules/interface/api/auth/login";

const USER_DETAIL_KEY = "userDetail";

const getUserDetail = (): loginDetailInterface | null => {
  const raw = localStorage.getItem(USER_DETAIL_KEY);
  if (!raw) return null;

  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;

    const record = parsed as Record<string, unknown>;
    const detail = record.detail;
    if (
      typeof record.username !== "string" ||
      typeof detail !== "object" ||
      detail === null
    ) {
      return null;
    }

    const detailRecord = detail as Record<string, unknown>;
    if (
      typeof detailRecord.name !== "string" ||
      (detailRecord.role !== "user" &&
        detailRecord.role !== "admin" &&
        detailRecord.role !== "staff")
    ) {
      return null;
    }

    return {
      username: record.username,
      detail: {
        name: detailRecord.name,
        role: detailRecord.role,
      },
    };
  } catch {
    return null;
  }
};

export const useDashboardUser = () => useOutletContext<loginDetailInterface>();

export const DashboardMain = () => {
  const userDetail = getUserDetail();

  if (!userDetail) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <div className="bg-bg-canvas px-4 py-8 min-h-[calc(100dvh-128px)]">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet context={userDetail} />
        </div>
      </div>
    </Layout>
  );
};

export const DashboardRedirect = () => {
  const user = useDashboardUser();
  return <Navigate to={`/dashboard/${user.detail.role}`} replace />;
};
