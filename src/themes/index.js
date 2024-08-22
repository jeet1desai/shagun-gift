import { useMemo } from "react";

import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useThemeScheme } from "../hooks/useThemeScheme";

import Palette from "./light/palette";
import Typography from "./light/typography";

export default function ThemeCustomization({ children }) {
  const systemColorScheme = useThemeScheme();

  const themeOptions = useMemo(
    () => ({
      direction: "ltr",
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      spacing: (...args) => args.map((multiplicator) => `${multiplicator * 4}px`).join(" "),
      palette: Palette("light").palette,
      typography: Typography(`'Inter', sans-serif`),
      border: {
        xxl: "16px",
        xl: "14px",
        lg: "12px",
        md: "10px",
        sm: "8px",
        xs: "6px",
      },
      icon: {
        size: {
          sm: 14,
          md: 16,
          lg: 20,
          xl: 40,
        },
        stroke: {
          sm: 1.6,
          md: 2,
          lg: 2.5,
        },
      },
    }),
    []
  );

  const themes = createTheme(themeOptions);

  console.log(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
