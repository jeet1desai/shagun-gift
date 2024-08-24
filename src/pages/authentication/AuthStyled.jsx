import { Box, styled } from "@mui/material";

export const StyledAuthContainer = styled(Box)(({ theme }) => ({
  margin: `${theme.spacing(4, 11, 4, 9)}`,
  height: `calc(100% - ${theme.spacing(8)})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));

export const StyledFooter = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.secondary,
  lineHeight: "20px",
  letterSpacing: "-0.084px",
  position: "absolute",
  bottom: "0",
  left: "0",
}));

export const StyledLoginContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledAuthHeading = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(0.5),
  "& h5": {
    color: theme.palette.text.primary,
  },
  "& p": {
    color: theme.palette.text.secondary,
    letterSpacing: "-0.176px",
  },
  "& span": {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
  },
}));
