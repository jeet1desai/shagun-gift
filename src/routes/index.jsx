import { useRoutes } from "react-router-dom";

import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";
import Home from "../pages/Home";

export default function ThemeRoutes() {
  return useRoutes([{ path: "/", element: <Home />, exact: true }, LoginRoutes, MainRoutes]);
}
