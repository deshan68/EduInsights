import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "../pages/404";
import { getActiveRoutesV2, routes } from "../route";
import { Role } from "../utils/types";
import Layout from "../layout/Layout";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const roles: Role[] = [Role.SUPER_ADMIN];

const AppHandler: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <PrivateRoute />, // Protect these routes
      children: [
        {
          path: "/",
          element: <Layout />,
          errorElement: <Error />,
          children: getActiveRoutesV2(routes, roles),
        },
      ],
    },
    {
      element: <PublicRoute />, // Allow only unauthenticated users
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppHandler;
