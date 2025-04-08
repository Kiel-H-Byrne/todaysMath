import { createTheme } from "@material-ui/core/styles"

// Create a theme instance with modern design principles
// Using a consistent color palette with proper contrast ratios for accessibility
const theme = createTheme({
  typography: {
    fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Merienda", serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: '"Merienda", serif',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.35,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.0075em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.01071em',
    },
    button: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
  },
  palette: {
    text: {
      primary: "rgba(255,255,255, 0.95)",
      secondary: "rgba(0,0,0, 0.95)",
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
      paper: "#FFFFFF",
    },
    action: {
      active: "rgba(255, 215, 0, 0.7)",
      hover: "rgba(255, 215, 0, 0.1)",
      selected: "rgba(255, 215, 0, 0.2)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
        padding: '8px 16px',
        transition: 'all 0.2s ease-in-out',
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
        },
      },
      outlined: {
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      },
    },
    MuiCard: {
      root: {
        borderRadius: 12,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
    MuiContainer: {
      root: {
        paddingTop: 24,
        paddingBottom: 24,
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 8,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 12,
      },
      elevation1: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
      },
      elevation2: {
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.12)',
      },
    },
  },
})

export default theme
