import { NonIndexRouteObject } from "react-router-dom";
import { View } from "./views/Index";
import React from "react";
import { isIncludedRole } from "./utils/utils";
import { Role } from "../src/utils/types";
import {
  DashboardIcon,
  AnalyticsIcon,
  AuditLogsIcon,
  ResultManagementIcon,
  SettingsIcon,
  UserManagementIcon,
} from "./components/icons";

export interface RouteObjectWithRole extends NonIndexRouteObject {
  allowRoles: Role[];
  icons:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
    | undefined;
  text: string;
  children?: RouteObjectWithRole[];
  bottomNav?: boolean;
}

interface RouteDetail {
  path: string;
  allowRoles: Role[];
  icons:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
    | undefined;
  text: string;
  bottomNav?: boolean;
}

export const routes: RouteObjectWithRole[] = [
  {
    path: "/",
    text: "Dashboard",
    icons: [
      React.createElement(DashboardIcon, { color: "#6B7587" }), // Inactive color
      React.createElement(DashboardIcon, { color: "#fff" }), // Active color
    ],
    element: React.createElement(View.Dashboard),
    allowRoles: [Role.SUPER_ADMIN],
  },
  {
    path: "/user-management",
    text: "User Management",
    icons: [
      React.createElement(UserManagementIcon, { color: "#6B7587" }), // Inactive color
      React.createElement(UserManagementIcon, { color: "#fff" }), // Active color
    ],
    element: React.createElement(View.UserManagement),
    allowRoles: [Role.SUPER_ADMIN],
  },
  {
    path: "/result-management",
    text: "Result Management",
    icons: [
      React.createElement(ResultManagementIcon, { color: "#6B7587" }), // Inactive color
      React.createElement(ResultManagementIcon, { color: "#fff" }), // Active color
    ],
    element: React.createElement(View.UserManagement),
    allowRoles: [Role.SUPER_ADMIN],
  },
  {
    path: "/analytics",
    text: "Analytics",
    icons: [
      React.createElement(AnalyticsIcon, { color: "#6B7587" }), // Inactive color
      React.createElement(AnalyticsIcon, { color: "#fff" }), // Active color
    ],
    element: React.createElement(View.UserManagement),
    allowRoles: [Role.SUPER_ADMIN],
  },
  {
    path: "/audit-logs",
    text: "Audit Logs",
    icons: [
      React.createElement(AuditLogsIcon, { color: "#6B7587" }), // Inactive color
      React.createElement(AuditLogsIcon, { color: "#fff" }), // Active color
    ],
    element: React.createElement(View.UserManagement),
    allowRoles: [Role.SUPER_ADMIN],
  },
  {
    path: "/settings",
    text: "Settings",
    icons: [
      React.createElement(SettingsIcon, { color: "#6B7587" }), // Inactive color
      React.createElement(SettingsIcon, { color: "#fff" }), // Active color
    ],
    element: React.createElement(View.UserManagement),
    allowRoles: [Role.SUPER_ADMIN],
  },
];

export const getActiveRoutesV2 = (
  routes: RouteObjectWithRole[] | undefined,
  roles: Role[]
): RouteObjectWithRole[] => {
  if (!routes) return [];
  var routesObj: RouteObjectWithRole[] = [];
  routes.forEach((routeObj) => {
    if (isIncludedRole(roles, routeObj.allowRoles)) {
      routesObj.push({
        ...routeObj,
        children: getActiveRoutesV2(routeObj.children, roles),
      });
    }
  });

  return routesObj;
};

export const getActiveRouteDetails = (roles: Role[]): RouteDetail[] => {
  var routesObj: RouteDetail[] = [];
  routes.forEach((routeObj) => {
    if (isIncludedRole(roles, routeObj.allowRoles)) {
      routesObj.push({
        path: routeObj.path ? routeObj.path : "",
        ...routeObj,
      });
    }
  });
  return routesObj;
};
