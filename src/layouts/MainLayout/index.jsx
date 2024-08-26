import React from "react";

import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      {/* <Header isSimpleLayout={false} open={open} handleDrawerToggle={handleDrawerToggle} /> */}
      {/* <Drawer open={open} handleDrawerToggle={handleDrawerToggle} /> */}
      <Box component="main" sx={{ width: "100%", flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
