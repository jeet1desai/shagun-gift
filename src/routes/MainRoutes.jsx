import { lazy } from "react";

import Loadable from "../components/Loadable";
import MainLayout from "../layouts/MainLayout";

const DashboardPage = Loadable(lazy(() => import("../pages/views/Dashboard")));
const EventsPage = Loadable(lazy(() => import("../pages/views/Events")));
const ProfilePage = Loadable(lazy(() => import("../pages/views/Profile")));

const MainRoutes = {
  element: <MainLayout />,
  children: [
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
    {
      path: "/events",
      element: <EventsPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
  ],
};

export default MainRoutes;
