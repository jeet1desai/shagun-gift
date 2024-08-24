import { lazy } from "react";

import Loadable from "../components/Loadable";
import MinimalLayout from "../layouts/MinimalLayout";

const LoginPage = Loadable(lazy(() => import("../pages/authentication/Login")));
const RegisterPage = Loadable(lazy(() => import("../pages/authentication/Register")));

const LoginRoutes = {
  element: <MinimalLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ],
};

export default LoginRoutes;
