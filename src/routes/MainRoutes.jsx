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
      path: "/dashboard/:id",
      element: <DashboardPage />,
    },
    {
      path: "/events/:id",
      element: <EventsPage />,
    },
    {
      path: "/profile/:id",
      element: <ProfilePage />,
    },
  ],
};

export default MainRoutes;
