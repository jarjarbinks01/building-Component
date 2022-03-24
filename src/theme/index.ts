import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { typography } from "@mui/system";
import { spacing } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009CCD',
      light: '#4B5CA5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#EF841F',
      contrastText: '#ffffff',
    }, 
    success: {
      main: '#2FCC71',
      light: '#CF2E76',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#F6354A',
      contrastText: '#ffffff',
    },
    info: {
      main: '#f06363',
      light: '#bcbcbc',
      dark: '#9d4de1',
    },
    text: {
        primary: '#3d4f76',
        secondary: '#9D9D9D',
    },
    background: {
      default: '#f3f9f9',
      paper: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontSize: 42,
      fontFamily: 'Roboto',
      fontWeight: 300,
      color: '#009CCD',
    },
    h2: {
      fontSize: 26,
      fontFamily: 'Roboto',
      fontWeight: 500,
      color: '#009CCD',
    },
    h3: {
      fontSize: 22,
      fontFamily: 'Roboto',
      fontWeight: 700,
      color: '#EF9F1F',
    },
    h4: {
      fontSize: 20,
      fontFamily: 'Roboto',
      fontWeight: 500,
      color: '#009CCD',
    },
    h5: {
      fontSize: 14,
      fontFamily: 'Roboto',
      fontWeight: 700,
      color: '#3D4F76',
    },
    body1: {
      fontSize: 14,
      fontFamily: 'Roboto',
      fontWeight: 400,
      color: '#42526E',
    },
    body2: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 700,
        color: '#3D4F76',
    },
    caption: {
      fontSize: 16,
      fontStyle: 'Italic',
      fontFamily: 'Roboto',
      fontWeight: 300,
      color: '#9D9D9D',
    },
    overline: {
      fontSize: 12,
      fontFamily: 'Roboto',
      fontWeight: 500,
      color: '#F6354A',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        sizeSmall: {
          // Adjust spacing to reach minimal touch target hitbox
          marginLeft: 4,
          marginRight: 4,
          padding: 12,
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
  spacing: 10,
});
theme.spacing(3);
theme.spacing(4);



export default theme;

