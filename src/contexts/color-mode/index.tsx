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
            main: "#475be8",
            light: "#848bff",
            dark: "#1b235c",
        },
        background: {
          default: "#f4f4f4",
          paper: "#fcfcfc",
        },
        text: {
          primary: "#626262",
          secondary: "#808191",
          disabled: "#c1c1c1",
        }
    },
  });

  const overridedDarkTheme = createTheme({
    ...RefineThemes.Blue,
    palette: {
        ...RefineThemes.Blue.palette,
        primary: {
            main: "#475be8",
            light: "#848bff",
            dark: "#ffffff",
        },
        background: {
          default: "#1a1d1f",
          paper: "#1a1d1f",
        },
        text: {
          primary: "#ffffff",
          secondary: "#808191",
          disabled: "#c1c1c1",
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
