import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    newProp1: {
      main: string;
      light: string;
      primary?: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    newProp1?: {
      main: string;
      light: string;
      primary?: string;
    };
  }
}

declare module "@mui/material/styles/createPalette" {
  interface SimplePaletteColorOptions {
    title?: string;
  }

  interface PaletteOptions {
    newPaleete1?: PaletteColorOptions;
    newPaleete2?: PaletteColorOptions;
  }
}

const theme2 = createTheme({
  palette: {
    primary: {
      main: "#009CCD",
      light: "#4B5CA5",
      contrastText: "#ffffff",
      title: "#ffffff",
    },
    secondary: {
      main: "#EF841F",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2FCC71",
      light: "#CF2E76",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#F6354A",
      contrastText: "#ffffff",
    },
    info: {
      main: "#f06363",
      light: "#bcbcbc",
      dark: "#9d4de1",
    },
    text: {
      primary: "#3d4f76",
      secondary: "#9D9D9D",
    },
    background: {
      default: "#f3f9f9",
      paper: "#ffffff",
    },
    newPaleete1: {
      main: "#009CCD",
      light: "#4B5CA5",
      contrastText: "#ffffff",
      title: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: 42,
      fontFamily: "Roboto",
      fontWeight: 300,
      color: "#009CCD",
    },
    h2: {
      fontSize: 26,
      fontFamily: "Roboto",
      fontWeight: 500,
      color: "#009CCD",
    },
    h3: {
      fontSize: 22,
      fontFamily: "Roboto",
      fontWeight: 700,
      color: "#EF9F1F",
    },
    h4: {
      fontSize: 20,
      fontFamily: "Roboto",
      fontWeight: 500,
      color: "#009CCD",
    },
    h5: {
      fontSize: 14,
      fontFamily: "Roboto",
      fontWeight: 700,
      color: "#3D4F76",
    },
    body1: {
      fontSize: 14,
      fontFamily: "Roboto",
      fontWeight: 400,
      color: "#42526E",
    },
    body2: {
      fontSize: 16,
      fontFamily: "Roboto",
      fontWeight: 700,
      color: "#3D4F76",
    },
    caption: {
      fontSize: 16,
      fontStyle: "Italic",
      fontFamily: "Roboto",
      fontWeight: 300,
      color: "#9D9D9D",
    },
    overline: {
      fontSize: 12,
      fontFamily: "Roboto",
      fontWeight: 500,
      color: "#F6354A",
    },
  },
  newProp1: {
    main: "#FF0000",
    primary: "#009CCD",
    light: "#4B5CA5",
  },
});

export default theme2;
