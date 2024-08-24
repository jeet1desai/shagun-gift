import React from "react";

import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";

import RightIntro from "./RightIntro";
import { MLayoutContainer } from "./StyledComponent";

const MinimalLayout = () => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <MLayoutContainer>
      <Box sx={{ width: isMediumScreen ? "100%" : "45%" }}>
        <Outlet />
      </Box>
      <Box sx={{ width: "55%", display: isMediumScreen ? "none" : "block" }}>
        <RightIntro />
      </Box>
    </MLayoutContainer>
  );
};

export default MinimalLayout;
