import { Navigate, Outlet } from "react-router-dom";

const LOGIN_STATUS_KEY = "isLoggedIn";

const checkLoginStatus = (): boolean => {
  const status = localStorage.getItem(LOGIN_STATUS_KEY);
  return Boolean(status && status !== "false");
};

export const ProtectedRoute = () => {
  if (!checkLoginStatus()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
