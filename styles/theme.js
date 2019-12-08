import { createMuiTheme } from '@material-ui/core/styles';
import './_colors.scss';


// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(0, 158, 88)',
      light: 'rgb(98, 188, 118)',
      dark: 'rgb(29, 109, 19)',
    },
    secondary: {
      main: 'rgb(192,192,192)',
      light: '',
      dark: '',
    },
    error: {
      main: '#E7453E',
    },
    background: {
      default: '#F9F9F9',
      // paper: 'rgb(245,255,250)',
    },
    action: {
      default: '#a065ff',
    },
    grey: {
      light: '',
      dark: 'rgb(155,161,123)',
    }
    
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(0, 158, 88)',
      light: 'rgb(98, 188, 118)',
      dark: 'rgb(29, 109, 19)',
    },
    secondary: {
      main: 'rgb(192,192,192)',
      light: '',
      dark: '',
    },
    error: {
      main: '#E7453E',
    },
    background: {
      default: '#F9F9F9',
      paper: '',
    },
    action: {
      default: '#a065ff',
    },
    grey: {
      light: '',
      dark: '',
    }
    
  },
});

export default theme