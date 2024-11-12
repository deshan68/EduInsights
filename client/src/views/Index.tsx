import { lazy } from "react";

const Dashboard = lazy(() => import("./dashboard/dashboard"));
const UserManagement = lazy(() => import("./userManagement/userManagement"));

export const View = {
  Dashboard,
  UserManagement,
};
