import { Box, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import Logo from "../../../assets/images/logo.png";

const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "flex-start" : "center",
  padding: theme.spacing(1, 1, 6, 1),
  gap: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,

  "& img": {
    width: "40px",
    height: "40px",
  },
}));

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <img src={Logo} alt="logo" />

      <Box sx={{ display: "flex", gap: theme.spacing(1), flexDirection: "column" }}>
        <Typography variant="h6">Gift</Typography>
        <Typography variant="body2">Shagun Management</Typography>
      </Box>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
