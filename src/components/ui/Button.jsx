import React from "react";

import { Button, styled, useTheme } from "@mui/material";

const getVariantStyles = (variant, theme) => {
  switch (variant) {
    case "contained":
      return {
        color: theme.palette.common.white,
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primary.main,
        boxShadow: "0px 1px 2px 0px rgba(55, 93, 251, 0.08)",

        "&:hover": {
          boxShadow: "0px 1px 2px 0px rgba(55, 93, 251, 0.08)",
          backgroundColor: theme.palette.primary.main,
        },
      };
    case "outlined":
      return {
        color: theme.palette.text.secondary,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.common.white,
        boxShadow: "0px 1px 2px 0px rgba(55, 93, 251, 0.08)",

        "&:hover": {
          boxShadow: "0px 1px 2px 0px rgba(55, 93, 251, 0.08)",
          backgroundColor: theme.palette.common.white,
          border: `1px solid ${theme.palette.divider}`,
        },
      };
    default:
      return {};
  }
};

const StyledButton = styled(Button)(({ theme, variant }) => ({
  display: "flex",
  padding: theme.spacing(2.5, 2),
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  borderRadius: theme.border.md,
  textAlign: "center",
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: "20px",
  letterSpacing: "-0.084px",
  ...getVariantStyles(variant, theme),
}));

const CButton = ({ className, Icon, title, fullWidth = false, variant = "contained", disabled = false, ...props }) => {
  const theme = useTheme();

  return (
    <StyledButton fullWidth={fullWidth} variant={variant} disabled={disabled} className={className} {...props}>
      {Icon && <Icon size={theme.icon.size.lg} />}
      {title}
    </StyledButton>
  );
};

export default CButton;
