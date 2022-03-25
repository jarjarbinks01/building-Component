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
    primaryButtonColor1?: PaletteColorOptions;
    primaryButtonColor2?: PaletteColorOptions;
    secondaryButtonColor1?: PaletteColorOptions;
    secondaryButtonColor2?: PaletteColorOptions;
    secondaryButtonColor3?: PaletteColorOptions;
  }
}

const theme2 = createTheme({
  palette: {
    primary: {
      main: "#E67E23",
      light: "#E67E23",
      contrastText: "#ffffff",
      title: "#ffffff",
    },
    secondary: {
      main: "#2D9FC3",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2FCC71",
      light: "#ffffff",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#F6354A",
      contrastText: "#ffffff",
    },
    info: {
      main: "#F06363",
      light: "#bcbcbc",
      dark: "#ffffff",
    },
    text: {
      primary: "#3d4f76",
      secondary: "#9D9D9D",
    },
    background: {
      default: "#F2F2F2",
      paper: "#ffffff",
    },
    primaryButtonColor1: {
      main: "#EF841F",
      light: "#EF9F1F",
      contrastText: "#ffffff",
    },
    primaryButtonColor2: {
      main: "#2D9FC3",
      light: "#1DB0DE",
      contrastText: "#ffffff",
    },
    secondaryButtonColor1: {
      main: "#CF2E76",
      light: "#EB3E8B",
      contrastText: "#ffffff",
    },
    secondaryButtonColor2: {
      main: "#F06363",
      contrastText: "#ffffff",
    },
    secondaryButtonColor3: {
      main: "#2FCC71",
      light: "#57E392",
      contrastText: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: 42,
      fontFamily: "Roboto",
      fontWeight: 300,
      color: "#E67E23",
    },
    h2: {
      fontSize: 26,
      fontFamily: "Roboto",
      fontWeight: 700,
      color: "#E67E23",
    },
    h3: {
      fontSize: 20,
      fontFamily: "Roboto",
      fontWeight: 700,
      color: "#2C90AD",
    },
    h4: {
      fontSize: 19,
      fontFamily: "Roboto",
      fontWeight: 700,
      color: "#42526E",
    },
    h5: {
      fontSize: 14,
      fontFamily: "Roboto",
      fontWeight: 500,
      color: "#2D9FC3",
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
    main: "#E67E23",
    primary: "#E67E23",
    light: "#4B5CA5",
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
theme2.spacing(3);
theme2.spacing(4);




export default theme2;
