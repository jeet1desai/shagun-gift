import React from "react";

import { Box, Input, InputAdornment, styled, Typography, useTheme } from "@mui/material";
import { MdError } from "react-icons/md";

const StyledContainer = styled(Box)(({ theme, fullWidth }) => ({
  display: "inline-flex",
  flexDirection: "column",
  width: fullWidth ? `100%` : "auto",
  gap: theme.spacing(1),
}));

const StyledLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  letterSpacing: "-0.084px",

  "& span": {
    color: theme.palette.primary.main,
  },
}));

const StyledErrorHelper = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const StyledInput = styled(Input)(({ theme, error }) => ({
  borderRadius: theme.border.md,
  border: `1px solid ${error ? theme.palette.error.main : theme.palette.divider}`,
  padding: theme.spacing(2.5, 2.5, 2.5, 3),
  color: "#0A0D14",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  letterSpacing: "-0.084px",

  "& input": {
    padding: 0,
  },
}));

const TextInput = ({
  className,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  fullWidth,
  error,
  noErrorHelper = false,
  required,
  type,
  autoFocus,
  placeholder,
  disabled,
  LeftIcon,
  autoComplete,
  ...props
}) => {
  const theme = useTheme();
  const iconColor = value ? theme.palette.text.secondary : theme.palette.placeHolder;

  return (
    <StyledContainer className={className} fullWidth={fullWidth ?? false}>
      {label && (
        <StyledLabel variant="h6">
          {label} {required && <span>*</span>}
        </StyledLabel>
      )}
      <StyledInput
        autoComplete={autoComplete || "off"}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...{ autoFocus, disabled, placeholder, required, value, fullWidth, error, type }}
        disableUnderline
        startAdornment={
          LeftIcon && (
            <InputAdornment position="start">
              <LeftIcon size={theme.icon.size.lg} color={iconColor} />
            </InputAdornment>
          )
        }
        {...props}
      />
      {error && !noErrorHelper && (
        <StyledErrorHelper variant="caption">
          <MdError size={theme.icon.size.md} /> {error}
        </StyledErrorHelper>
      )}
    </StyledContainer>
  );
};

export default TextInput;
