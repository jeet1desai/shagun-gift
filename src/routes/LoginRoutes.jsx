import { lazy } from "react";

import Loadable from "../components/Loadable";

const LoginPage = Loadable(lazy(() => import("../pages/authentication/Login")));

const LoginRoutes = {
  path: "/",
  // element: <MinimalLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
  ],
};

export default LoginRoutes;
