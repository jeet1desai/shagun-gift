import { styled, useTheme } from "@mui/material/styles";
import { AppBar, Box, IconButton, Toolbar, useMediaQuery } from "@mui/material";

import { RxHamburgerMenu } from "react-icons/rx";

import Profile from "./Profile";

const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: "260px",
    width: `calc(100% - 272px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  const iconBackColor = "grey.300";

  const mainHeader = (
    <Toolbar sx={{ minHeight: "88px" }}>
      {matchDownMD && (
        <IconButton
          disableRipple
          onClick={handleDrawerToggle}
          edge="start"
          color="secondary"
          sx={{ color: "text.primary", bgcolor: open ? "" : iconBackColor, ml: { xs: 0, lg: -2 }, borderRadius: "8px" }}
        >
          <RxHamburgerMenu />
        </IconButton>
      )}
      <Box sx={{ width: "100%", ml: { xs: 0, md: 1 } }} />

      <Profile />
    </Toolbar>
  );

  const appBar = {
    position: "fixed",
    elevation: 0,
    sx: {
      minHeight: "88px",
      background: theme.palette.common.white,
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  };

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;
