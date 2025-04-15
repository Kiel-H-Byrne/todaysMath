import { createTheme, Theme } from "@material-ui/core/styles";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

//google fonts
// font-family: 'Just Another Hand', cursive;
// font-family: 'Merienda', cursive;
// font-family: 'Quicksand', sans-serif;
// font-family: 'Cormorant Garamond', serif;

// Common typography settings
const typography: TypographyOptions = {
  fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontFamily: '"Merienda", serif',
    fontWeight: 700,
  },
  h2: {
    fontFamily: '"Merienda", serif',
    fontWeight: 700,
  },
  h3: {
    fontWeight: 600,
  },
  h4: {
    fontWeight: 600,
  },
  h5: {
    fontWeight: 600,
  },
  h6: {
    fontWeight: 600,
  },
  button: {
    fontWeight: 600,
    textTransform: 'none',
  },
};

// Dark Theme (Black/Gold)
export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    primary: {
      main: "#FFD700", // Gold
      light: "#FFEB7F", // Light gold
      dark: "#C8A800", // Dark gold for better contrast
    },
    secondary: {
      main: "#3F334D", // English Violet - more accessible
      light: "#6A5980", // Light violet
      dark: "#2A2235", // Dark violet
    },
    error: {
      main: "#E7453E",
      light: "#F07470",
      dark: "#B92E28",
    },
    background: {
      default: "#1A1A1A", // Dark background for better contrast
      paper: "#2D2D2D", // Slightly lighter than default for cards
    },
    action: {
      active: "rgba(255, 215, 0, 0.7)",
      hover: "rgba(255, 215, 0, 0.1)",
      selected: "rgba(255, 215, 0, 0.2)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
    },
  },
  typography,
});

// Light Theme (Silver/Bronze)
export const lightTheme = createTheme({
  palette: {
    type: 'light',
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
    },
    primary: {
      main: "#CD7F32", // Bronze
      light: "#E0A66F", // Light bronze
      dark: "#A35719", // Dark bronze for better contrast
    },
    secondary: {
      main: "#C0C0C0", // Silver
      light: "#E0E0E0", // Light silver
      dark: "#909090", // Dark silver for better contrast
    },
    error: {
      main: "#E7453E",
      light: "#F07470",
      dark: "#B92E28",
    },
    background: {
      default: "#F5F5F5", // Light background
      paper: "#FFFFFF", // White for cards
    },
    action: {
      active: "rgba(205, 127, 50, 0.7)", // Bronze with opacity
      hover: "rgba(205, 127, 50, 0.1)",
      selected: "rgba(205, 127, 50, 0.2)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
  },
  typography,
});

export type ThemeMode = 'light' | 'dark';

export const getMyTheme = (mode: ThemeMode): Theme => {
  return mode === 'light' ? lightTheme : darkTheme;
};
