import React, { useEffect, useState } from "react";

import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

import Drawer from "./Drawer";
import Header from "./Header";

import { dispatch, useSelector } from "../../store";
import { openDrawer } from "../../store/slices/menu";

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  const { drawerOpen } = useSelector((state) => state.menu);

  const [open, setOpen] = useState(drawerOpen);

  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  useEffect(() => {
    if (matchDownMD) {
      dispatch(openDrawer({ drawerOpen: true }));
      setOpen(true);
    }
  }, [matchDownMD]);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ width: "100%", flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar sx={{ minHeight: "88px" }} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
