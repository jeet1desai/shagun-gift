import React from "react";

import { useTheme } from "@mui/material/styles";
import { Avatar, Box, ButtonBase, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // if (!user) {
  //   return null;
  // }

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
          p: 1,
          borderRadius: "8px",
          "&:hover": { bgcolor: "grey.100" },
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
        onClick={() => navigate("/profile")}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar alt="profile user" src={""} sx={{ width: 32, height: 32 }} />
          <Typography sx={{ textTransform: "capitalize", color: theme.palette.text.primary }} variant="h6">{`Name`}</Typography>
        </Stack>
      </ButtonBase>
    </Box>
  );
};

export default Profile;
