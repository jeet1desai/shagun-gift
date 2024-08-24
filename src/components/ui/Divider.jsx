import React from "react";

import { Divider, styled } from "@mui/material";

const StyledDivider = styled(Divider)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(6, 0),
  width: "100%",
}));

const CDivider = ({ ...props }) => {
  return <StyledDivider />;
};

export default CDivider;
