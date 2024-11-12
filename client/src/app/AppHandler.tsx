import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "../pages/404";
import { getActiveRoutesV2, routes } from "../route";

import { Role } from "../utils/types";
import Layout from "../layout/Layout";

const roles: Role[] = [Role.SUPER_ADMIN];

const AppHandler: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: getActiveRoutesV2(routes, roles),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppHandler;
