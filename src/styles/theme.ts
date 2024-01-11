import { createTheme } from "@material-ui/core/styles"
// import "./_colors.scss";

//google fonts
// font-family: 'Just Another Hand', cursive;
// font-family: 'Merienda', cursive;
// font-family: 'Quicksand', sans-serif;
// font-family: 'Cormorant Garamond', serif;

// Create a theme instance.
const theme = createTheme({
  //{"Gold":"ffd700","Slate gray":"7d8491","Cinnabar":"e94f37","English Violet":"3f334d","Claret":"6d213c"}
  palette: {
    text: {
      primary: "rgba(255,255,255, 1)",
      secondary: "rgba(0,0,0, 1)",
    },
    primary: {
      main: "#ffd700",
      light: "#7d8491",
      dark: "rgb(109, 89, 0, .7)",
    },
    secondary: {
      main: "rgba(60, 0, 90, 1)",
      light: "rgba(160,100,190, 0.8)",
      dark: "#E7453E",
    },
    error: {
      main: "#E7453E",
      light: "#E7453Eaa",
    },
    background: {
      default: "rgba(35,25,05, 1)",
      paper: "rgba(255,255,255, 1)",
    },
  },
})

// const darkTheme = createTheme({
//          palette: {
//            primary: {
//              main: "rgb(0, 158, 88)",
//              light: "rgb(98, 188, 118)",
//              dark: "rgb(29, 109, 19)",
//            },
//            secondary: {
//              main: "rgb(192,192,192)",
//              light: "",
//              dark: "",
//            },
//            error: {
//              main: "#E7453E",
//            },
//            background: {
//              default: "#F9F9F9",
//              paper: "",
//            },
//            action: {
//              default: "#a065ff",
//            },
//            grey: {
//              light: "",
//              dark: "",
//            },
//          },
//        })

export default theme
