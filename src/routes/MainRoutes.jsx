import { lazy } from "react";

import Loadable from "../components/Loadable";
import MainLayout from "../layouts/MainLayout";

const DashboardPage = Loadable(lazy(() => import("../pages/views/Dashboard")));
const EventsPage = Loadable(lazy(() => import("../pages/views/Events")));
const EventFormPage = Loadable(lazy(() => import("../pages/views/EventForm")));
const EventDetailPage = Loadable(lazy(() => import("../pages/views/EventDetail")));
const ProfilePage = Loadable(lazy(() => import("../pages/views/Profile")));
const InvitesPage = Loadable(lazy(() => import("../pages/views/Invites")));

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
      path: "/invites/:id",
      element: <InvitesPage />,
    },
    {
      path: "/events/:id/event/create",
      element: <EventFormPage />,
    },
    {
      path: "/events/:id/event/:eid",
      element: <EventDetailPage />,
    },
    {
      path: "/profile/:id",
      element: <ProfilePage />,
    },
  ],
};

export default MainRoutes;
