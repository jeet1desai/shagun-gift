import { forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { Box, Icon, ListItemButton, ListItemIcon, ListItemText, styled, Typography } from "@mui/material";

import { useDispatch, useSelector } from "../../../../store";
import { activeItem } from "../../../../store/slices/menu";

export const StyledTip = styled(Box)(({ theme }) => ({
  width: "4px",
  height: "20px",
  position: "absolute",
  left: "-20px",
  top: "12px",
  borderRadius: theme.spacing(0, 4, 4, 0),
  background: theme.palette.primary.main,
}));

const NavItem = ({ item }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { drawerOpen, openItem } = useSelector((state) => state.menu);

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch(activeItem({ openItem: [id] }));
  };

  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
  }, []);

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;

  const textColor = "text.primary";
  const iconSelectedColor = "primary.main";

  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? "1rem" : "1.25rem" }} /> : false;

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        p: theme.spacing(2, 3),
        mt: "2px",
        mb: "2px",
        borderRadius: theme.spacing(2),
        "&:hover": {
          bgcolor: theme.palette.background.paper,
        },
        "&.Mui-selected": {
          bgcolor: theme.palette.background.paper,
          "&:hover": {
            bgcolor: theme.palette.background.paper,
          },
          border: 0,
        },
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
            ...(!drawerOpen && {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                bgcolor: "secondary.lighter",
              },
            }),
            ...(!drawerOpen &&
              isSelected && {
                bgcolor: "primary.lighter",
                "&:hover": {
                  bgcolor: "primary.lighter",
                },
              }),
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      <ListItemText
        primary={
          <Typography variant="h6" sx={{ color: isSelected ? theme.palette.text.primary : theme.palette.text.secondary }}>
            {item.title}
          </Typography>
        }
      />
      {isSelected && <StyledTip />}
    </ListItemButton>
  );
};

export default NavItem;
