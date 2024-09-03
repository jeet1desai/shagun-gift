import React from "react";

import { Button, styled, useTheme } from "@mui/material";

const getVariantStyles = (variant, state, theme) => {
  switch (variant) {
    case "primary":
      switch (state) {
        case "Filled":
          return {
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.primary.main,
            boxShadow: "0px 1px 2px 0px rgba(55, 93, 251, 0.08)",
            transition: "border-color 0.3s, background-color 0.3s, box-shadow 0.3s",

            "&:hover": {
              background: theme.palette.primary.dark,
            },

            "&:focus-within": {
              background: theme.palette.primary.main,
              boxShadow: "0px 0px 0px 2px #FFF, 0px 0px 0px 4px #E4E5E7",
            },
          };
        case "Stroke":
          return {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.common.white,
            boxShadow: "0px 1px 2px 0px rgba(55, 93, 251, 0.08)",
            transition: "border-color 0.3s, background-color 0.3s, box-shadow 0.3s",

            "&:hover": {
              backgroundColor: theme.palette.primary.hover,
              border: `1px solid ${theme.palette.primary.hover}`,
            },

            "&:focus-within": {
              border: `1px solid ${theme.palette.primary.main}`,
              backgroundColor: theme.palette.common.white,
              boxShadow: "0px 0px 0px 2px #FFF, 0px 0px 0px 4px #E4E5E7",
            },
          };
        case "Blue":
          return {
            color: theme.palette.common.white,
            boxShadow: "0px 1px 2px 0px rgba(37, 62, 167, 0.48), 0px 0px 0px 1px #375DFB",
            border: "1px solid #FFFFFF1F",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #375DFB",
            transition: "border-color 0.5s, background-color 0.5s, box-shadow 0.5s",

            "&:hover": {
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #375DFB",
            },

            "&:focus-within": {
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.16) 100%), #375DFB",
            },
          };
      }
    case "neutral":
      switch (state) {
        case "Filled":
          return {
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.surface[700]}`,
            backgroundColor: theme.palette.surface[700],
            boxShadow: "0px 1px 2px 0px rgba(82, 88, 102, 0.06)",
            transition: "border-color 0.3s, background-color 0.3s, box-shadow 0.3s",

            "&:hover": {
              backgroundColor: theme.palette.text.primary,
              border: `1px solid ${theme.palette.text.primary}`,
            },

            "&:focus-within": {
              border: `1px solid ${theme.palette.surface[700]}`,
              backgroundColor: theme.palette.surface[700],
              boxShadow: "0px 0px 0px 2px #FFF, 0px 0px 0px 4px #E4E5E7",
            },
          };
        case "Stroke":
          return {
            color: theme.palette.text.secondary,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.common.white,
            boxShadow: "0px 1px 2px 0px rgba(82, 88, 102, 0.06)",
            transition: "border-color 0.3s, background-color 0.3s, box-shadow 0.3s",

            "&:hover": {
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.background.paper}`,
              color: theme.palette.text.primary,
            },

            "&:focus-within": {
              border: `1px solid ${theme.palette.text.primary}`,
              backgroundColor: theme.palette.common.white,
              boxShadow: "0px 0px 0px 2px #FFF, 0px 0px 0px 4px #E4E5E7",
            },
          };
      }
    default:
      return {};
  }
};

const StyledButton = styled(Button)(({ theme, variant, state }) => ({
  display: "flex",
  padding: theme.spacing(2.5),
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  borderRadius: theme.border.md,
  textAlign: "center",
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: "20px",
  letterSpacing: "-0.084px",
  ...getVariantStyles(variant, state, theme),

  "&.Mui-disabled": {
    background: theme.palette.background.paper,
    color: theme.palette.text.disabled,
    border: `1px solid ${theme.palette.background.paper}`,
  },
}));

const CButton = ({ className, Icon, title, fullWidth = false, variant = "primary", state = "Filled", disabled = false, ...props }) => {
  const theme = useTheme();

  return (
    <StyledButton fullWidth={fullWidth} variant={variant} state={state} disabled={disabled} className={className} {...props}>
      {Icon && <Icon size={theme.icon.size.lg} />}
      {title}
    </StyledButton>
  );
};

export default CButton;
