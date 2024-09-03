import React, { useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, ButtonBase, IconButton, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { dispatch, useSelector } from "../../../store";
import { cookieStorage } from "../../../utils/cookie";
import { logoutSuccess, userSuccess } from "../../../store/slices/user";

import CButton from "../../../components/ui/Button";

import { FiLogOut } from "react-icons/fi";

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
    <Box sx={{ flexShrink: 0, ml: 0.75, display: "flex", alignItems: "center", gap: "12px", width: "100%", justifyContent: "flex-end" }}>
      <ButtonBase
        sx={{
          p: 2,
          borderRadius: "8px",
          "&:hover": { bgcolor: "grey.100" },
        }}
        onClick={() => navigate(`/profile/${id}`)}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Typography sx={{ textTransform: "capitalize", color: theme.palette.text.primary }} variant="h6">
            {user?.name}
          </Typography>
        </Stack>
      </ButtonBase>
      <IconButton
        sx={{ borderRadius: "8px" }}
        onClick={() => {
          cookieStorage.removeItem("user");
          dispatch(logoutSuccess());
          navigate(`/login`);
        }}
      >
        <FiLogOut />
      </IconButton>
    </Box>
  );
};

export default Profile;
