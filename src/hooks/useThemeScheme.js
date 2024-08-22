import { useEffect, useMemo, useState } from "react";

export const useThemeScheme = () => {
  const mediaQuery = useMemo(() => window.matchMedia("(prefers-color-scheme: dark)"), []);

  const [preferredColorScheme, setPreferredColorScheme] = useState(!window.matchMedia || !mediaQuery.matches ? "Light" : "Dark");

  useEffect(() => {
    if (window.matchMedia === undefined || window.matchMedia === null) {
      return;
    }

    const handleChange = (event) => {
      setPreferredColorScheme(event.matches ? "Dark" : "Light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [mediaQuery]);

  return preferredColorScheme;
};
