import { Box, styled, Typography } from "@mui/material";

export const MLayoutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: "100vh",
  height: "100%",
  display: "flex",
}));

export const StyledRightBoxWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  position: "relative",

  "& img": {
    borderRadius: `${theme.spacing(4, 0, 0, 4)}`,
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
}));

export const StyledContentBox = styled(Box)(({ theme }) => ({
  width: "80%",
  position: "absolute",
  top: "16%",
  left: "10%",

  [theme.breakpoints.down("lg")]: {
    left: "10%",
  },

  [theme.breakpoints.down("md")]: {
    left: "10%",
  },
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  letterSpacing: "-0.01em",
  color: theme.palette.common.white,
}));
