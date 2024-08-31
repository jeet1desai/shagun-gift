import { lazy } from "react";

import Loadable from "../components/Loadable";
import AuthLayout from "../layouts/AuthLayout";

const LoginPage = Loadable(lazy(() => import("../pages/authentication/Login")));
const RegisterPage = Loadable(lazy(() => import("../pages/authentication/Register")));

const LoginRoutes = {
  element: <AuthLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register/:id",
      element: <RegisterPage />,
    },
  ],
};

export default LoginRoutes;
