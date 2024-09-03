import { Box, Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(8),
}));

export const StyledHeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& h4": {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
}));

export const StyledHeading = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3.5),
  color: theme.palette.text.primary,
}));

export const StyledEventList = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),

  "& .event-card": {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),

    "& span": {
      fontWeight: "bold",
    },
  },
  "& a": {
    textDecoration: "none",
  },
}));

export const StyledEmptyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "110px",

  "& .empty-state-card": {
    borderRadius: "16px",
    width: "684px",
    height: "348px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: theme.spacing(5),

    "& img": {
      width: "100px",
      height: "100px",
    },

    "& a": {
      textDecoration: "none",
    },

    "& h6": {
      color: theme.palette.placeHolder,
    },
  },
}));

export const StyledEventBtn = styled(Box)(() => ({
  float: "right",
}));
