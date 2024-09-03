import { Box, styled } from "@mui/material";

const StyledCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
}));

const Card = ({ children, padding, ...props }) => {
  return (
    <StyledCard style={{ padding: padding }} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;
