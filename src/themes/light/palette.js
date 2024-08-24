import { createTheme } from "@mui/material/styles";

const Palette = (mode) => {
  const contrastText = "#fff";

  return createTheme({
    palette: {
      mode,
      common: { black: "#000", white: "#fff" },
      primary: { main: "#FF0000", light: "#FDEDF0", dark: "#1565c0", contrastText },
      secondary: { main: "#9c27b0", light: "#ba68c8", dark: "#7b1fa2", contrastText },
      error: { main: "#DF1C41", light: "#FDEDF0", dark: "#c62828", contrastText },
      warning: { main: "#ed6c02", light: "#ff9800", dark: "#e65100", contrastText },
      info: { main: "#0288d1", light: "#03a9f4", dark: "#01579b", contrastText },
      success: { main: "#2e7d32", light: "#4caf50", dark: "#1b5e20", contrastText },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161",
      },
      placeHolder: "#868C98",
      contrastThreshold: 3,
      tonalOffset: 0.2,
      text: { primary: "#0A0D14", secondary: "#525866", disabled: "#CDD0D5" },
      divider: "#E2E4E9",
      background: { paper: "#F6F8FA", default: "#fff" },
    },
  });
};

export default Palette;
