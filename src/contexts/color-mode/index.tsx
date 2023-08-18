import { ThemeProvider } from "@mui/material/styles";
import { RefineThemes } from "@refinedev/mui";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { createTheme } from "@mui/material/styles";

type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const isSystemPreferenceDark = window?.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const [mode, setMode] = useState(
    colorModeFromLocalStorage || systemPreference
  );

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  
  const overridedLightTheme = createTheme({
    ...RefineThemes.Blue,
    palette: {
        ...RefineThemes.Blue.palette,
        primary: {
            main: "#38b000",
            dark: "#002913",
            light: "#E7FFDD",
        },
        background: {
          default: "#F4F4F4",
          paper: "#FCFCFC",
        },
        text: {
          primary: "#626262",
          secondary: "#808191",
        }
    },
  });

  const overridedDarkTheme = createTheme({
    ...RefineThemes.Blue,
    palette: {
        ...RefineThemes.Blue.palette,
        primary: {
            main: "#38b000",
            dark: "#ffffff",
            light: "#194D19",
        },
        background: {
          default: "#121511",
          paper: "#1B1F1A",
        },
        text: {
          primary: "#ffffff",
          secondary: "#ffffff",
        }
    },
  });

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ThemeProvider
        // you can change the theme colors here. example: mode === "light" ? RefineThemes.Magenta : RefineThemes.MagentaDark
        theme={mode === "light" ? overridedLightTheme : overridedDarkTheme}
      >
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
