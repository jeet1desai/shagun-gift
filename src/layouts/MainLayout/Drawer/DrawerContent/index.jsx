import { Box, List, styled, Typography, useTheme } from "@mui/material";

import { useSelector } from "../../../../store";
import NavItem from "./NavItem";
import { useParams } from "react-router-dom";

export const StyledHead = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1.2),
  textTransform: "uppercase",
  color: theme.palette.placeHolder,
}));

const DrawerContent = () => {
  const theme = useTheme();
  const { id } = useParams();

  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;

  const navGroups = [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: `dashboard/${id}`,
      icon: null,
    },
    {
      id: "events",
      title: "Events",
      type: "item",
      url: `events/${id}`,
      icon: null,
    },
    {
      id: "invites",
      title: "Invites",
      type: "item",
      url: `invites/${id}`,
      icon: null,
    },
  ].map((item) => {
    return <NavItem key={item.id} item={item} />;
  });

  return (
    <Box sx={{ pt: 2, padding: theme.spacing(5, 0) }}>
      <StyledHead variant="h6">Main</StyledHead>
      <List sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}>{navGroups}</List>
    </Box>
  );
};

export default DrawerContent;
