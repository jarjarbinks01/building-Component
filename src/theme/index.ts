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
  spacing: 10,
});

theme.spacing(3);
theme.spacing(4);

export default theme;

