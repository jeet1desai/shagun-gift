import React from "react";

import { Box, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import BGImage from "../assets/images/background.jpg";

import Button from "../components/ui/Button";

export const StyledHomeContainer = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)}`,
  height: `100%`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  "& img": {
    borderRadius: `${theme.spacing(4)}`,
    width: "100%",
    height: `calc(100vh - ${theme.spacing(8)})`,
    objectFit: "cover",
  },
}));

export const StyledHeading = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  position: "absolute",
  top: "18%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(4),

  "& button": {
    width: "150px",
    borderRadius: "25px",
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(6),
  },
}));

const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledHomeContainer>
      <img src={BGImage} alt="background" />

      <StyledHeading>
        <Typography variant="h1">Shagun Gift</Typography>
        <Typography variant="h4" style={{ width: "75%" }}>
          Shagun is a blessing, a commitment, an intimate ceremony where both host and guest's exchange gifts, making it one of the most auspicious
          ceremonies to start celebrations with.
        </Typography>
        <Button variant="contained" title="Login" onClick={() => navigate("/login")} />
      </StyledHeading>
    </StyledHomeContainer>
  );
};

export default Home;
