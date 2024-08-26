import { useMemo } from "react";

import { styled, useTheme } from "@mui/material/styles";
import { Box, Drawer, useMediaQuery } from "@mui/material";

import DrawerHeader from "./DrawerHeader";
import DrawerContent from "./DrawerContent";

const openedMixin = (theme) => ({
  width: "272px",
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  boxShadow: "none",
  background: theme.palette.common.white,
  padding: theme.spacing(5),
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
  borderRight: "none",
  boxShadow: "0px 2px 8px #0000000b",
  background: theme.palette.common.white,
  padding: theme.spacing(5),
});

const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: "272px",
  flexShrink: 0,
  background: theme.palette.common.white,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MainDrawer = ({ open, handleDrawerToggle, window }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1 }}>
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={open}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "272px",
              borderRight: `1px solid ${theme.palette.divider}`,
              background: theme.palette.common.white,
              boxShadow: "inherit",
              padding: theme.spacing(5),
            },
          }}
        >
          {drawerHeader}
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
};

export default MainDrawer;
