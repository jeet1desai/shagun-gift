import { Backdrop, CircularProgress, useTheme } from "@mui/material";

const Loader = ({ loading }) => {
  const theme = useTheme();

  return (
    <Backdrop sx={{ zIndex: 9999, color: theme.palette.common.white }} open={loading}>
      <CircularProgress sx={{ color: theme.palette.primary.main }} />
    </Backdrop>
  );
};

export default Loader;
