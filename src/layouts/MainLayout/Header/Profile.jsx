import React, { useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import { Avatar, Box, ButtonBase, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { dispatch, useSelector } from "../../../store";
import { cookieStorage } from "../../../utils/cookie";
import { userSuccess } from "../../../store/slices/user";

const Profile = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const sessionUser = cookieStorage.getItem("user");
  useEffect(() => {
    if (sessionUser) {
      dispatch(userSuccess({ user: JSON.parse(sessionUser) }));
    }
  }, [sessionUser]);

  return (
    <Box
      sx={{
        flexShrink: 0,
        ml: 0.75,
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      }}
    >
      <ButtonBase
        sx={{
          px: 2,
          py: 1,
          borderRadius: "8px",
          "&:hover": { bgcolor: "grey.100" },
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
        onClick={() => navigate(`/profile/${id}`)}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Typography sx={{ textTransform: "capitalize", color: theme.palette.text.primary }} variant="h6">
            {user?.name}
          </Typography>
        </Stack>
      </ButtonBase>
    </Box>
  );
};

export default Profile;
