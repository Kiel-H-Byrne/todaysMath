import { createTheme } from "@material-ui/core/styles"
// import "./_colors.scss";

//google fonts
// font-family: 'Just Another Hand', cursive;
// font-family: 'Merienda', cursive;
// font-family: 'Quicksand', sans-serif;
// font-family: 'Cormorant Garamond', serif;

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(255,215,0, .8)",
      light: "rgba(255, 215, 105, .8)",
      dark: "rgb(109, 89, 0, .7)",
    },
    secondary: {
      main: "rgb(25,21,0)",
      light: "",
      dark: "",
    },
    error: {
      main: "#E7453E",
    },
    background: {
      default: "rgba(255,255,255, 1)",
    },
    action: {
      active: "#a065ff",
    },
    grey: {
      50: "rgba(133,133,133, 0.53)",
      900: "rgb(155,161,123)",
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 158, 88)",
      light: "rgb(98, 188, 118)",
      dark: "rgb(29, 109, 19)",
    },
    secondary: {
      main: "rgb(192,192,192)",
      light: "",
      dark: "",
    },
    error: {
      main: "#E7453E",
    },
    background: {
      default: "#F9F9F9",
      paper: "",
    },
    action: {
      active: "#a065ff",
    },
    grey: {
      50: "",
      900: "",
    },
  },
})

export default theme
