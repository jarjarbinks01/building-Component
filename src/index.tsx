import { Box, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme/index";
import theme2 from "./theme/theme2"
import theme3 from "./theme/theme3"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <ThemeProvider theme={theme2}>
    <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h1' }}>MPFA Portal</Box>
        <br></br>
        <Grid container spacing={1}>
      <Grid item xs={5} sm={9}>
        <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h4' }}>Color Scheme</Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', p: 2 }}>
          Theme #EF841F
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>
          Primary #EF841F
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
            p: 2,
          }}
        >
          Secondary #2D9FC3
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'warning.main', color: 'warning.contrastText', p: 2 }}>
          Additional 1 #F6354A
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'success.main', color: 'success.contrastText', p: 2 }}>
          Additional 2 #2FCC71
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'info.main', color: 'info.contrastText', p: 2 }}>
          Additional 3 #F06363
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'info.light', color: 'info.contrastText', p: 2 }}>
          Additional 4 #BCBCBC
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>
          Text.Primary #3D4F76
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'text.secondary', color: 'background.paper', p: 2 }}>
          Text.Secondary #9D9D9D
        </Box>
      </Grid>
    </Grid>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Grid container spacing={3}>
      <Grid item xs={5} sm={12}>
        <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h4' }}>Typography </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 1</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h1' }}>H1/Roboto/42px/300/#E67E23</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 2</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h2' }}>H2/Roboto/26px/700/#E67E23</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 3</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h3' }}>H3/Roboto/20px/700/#2C90AD</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 4</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h4' }}>H4/Roboto/19px/700/#42526E</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 5</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h5' }}>H5/Roboto/14px/500/#2D9FC3</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Body</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'body1' }}>Body/Roboto/14px/400/#42526E</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Input Field Text</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'body2' }}>InputField/Roboto/16px/700/#3D4F76</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Input Field Hints</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'caption' }}>InputField/Roboto/16px/Italic/300/#9D9D9D</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Input Field Alert</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'overline' }}>InputField/Roboto/12px/500/#F6354A</Box>
      </Grid>
      </Grid>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
    <Grid container spacing={3}>
      <Grid item xs={5} sm={12}>
        <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h4' }}>Spacing </Box>
      </Grid>
      <Grid item xs={12} sm={10}>
      <Box
        sx={{
          paddingTop: 3, paddingBottom: 4, paddingRight: 3, paddingLeft: 3,
          boxShadow: 3,
          width: '1080px',
          height: '574px',
          bgcolor: (theme) =>
            theme.palette.mode === 'light' ? '#ffffff' : '#f2f2f2',
          color: (theme) =>
            theme.palette.mode === 'light' ? '#EF841F' : 'grey.800',
          textAlign: 'left',
          borderRadius: '15px',
          fontSize: '26px',
          fontWeight: '700',
        }}
      >paddingTop: 3,
        <br></br>
        paddingBottom: 4,
        <br></br>
        paddingRight: 3,
        <br></br>
        paddingLeft: 3,
        <br></br>
        <br></br>
        boxShadow: 3,
        </Box>
      </Grid>
      </Grid>
    </ThemeProvider>
    <ThemeProvider theme={theme3}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h1' }}>Admin Portal</Box>
    <br></br>
    <Grid container spacing={1}>
      <Grid item xs={5} sm={9}>
        <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h4' }}>Color Scheme</Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', p: 2 }}>
          Theme #0D6A88
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>
          Primary #009CCD
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
            p: 2,
          }}
        >
          Secondary #EF841F
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'warning.main', color: 'warning.contrastText', p: 2 }}>
          Additional 1 #F6354A
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'success.main', color: 'success.contrastText', p: 2 }}>
          Additional 2 #2FCC71
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'info.main', color: 'info.contrastText', p: 2 }}>
          Additional 3 #777777
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'info.light', color: 'info.contrastText', p: 2 }}>
          Additional 4 #ED562D
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'info.dark', color: 'info.contrastText', p: 2 }}>
          Additional 5 #EF9F1F
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'success.light', color: 'info.contrastText', p: 2 }}>
          Additional 6 #FFEB00
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>
          Text.Primary #3d4f76
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'text.secondary', color: 'background.paper', p: 2 }}>
          Text.Secondary #9D9D9D
        </Box>
      </Grid>
    </Grid>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Grid container spacing={3}>
      <Grid item xs={5} sm={12}>
        <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h4' }}>Typography </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 1</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h1' }}>H1/Roboto/42px/300/#009CCD</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 2</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h2' }}>H2/Roboto/26px/500/#009CCD</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 3</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h3' }}>H3/Roboto/22px/700/#EF9F1F</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 4</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h4' }}>H4/Roboto/20px/500/#009CCD</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Heading 5</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h5' }}>H5/Roboto/14px/700/#3D4F76</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Body</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'body1' }}>Body/Roboto/14px/400/#42526E</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Input Field Text</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'body2' }}>InputField/Roboto/16px/700/#3D4F76</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Input Field Hints</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'caption' }}>InputField/Roboto/16px/Italic/300/#9D9D9D</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'body1' }}>Input Field Alert</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'overline' }}>InputField/Roboto/12px/500/#F6354A</Box>
      </Grid>
      </Grid>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
    <Grid container spacing={3}>
      <Grid item xs={5} sm={12}>
        <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h4' }}>Spacing </Box>
      </Grid>
      <Grid item xs={12} sm={10}>
      <Box
        sx={{
          paddingTop: 3, paddingBottom: 4, paddingRight: 3, paddingLeft: 3,
          boxShadow: 3,
          width: '1080px',
          height: '574px',
          bgcolor: (theme) =>
            theme.palette.mode === 'light' ? '#ffffff' : '#f2f2f2',
          color: (theme) =>
            theme.palette.mode === 'light' ? '#EF841F' : 'grey.800',
          textAlign: 'left',
          borderRadius: '15px',
          fontSize: '26px',
          fontWeight: '700',
        }}
      >paddingTop: 3,
        <br></br>
        paddingBottom: 4,
        <br></br>
        paddingRight: 3,
        <br></br>
        paddingLeft: 3,
        <br></br>
        <br></br>
        boxShadow: 3,
        </Box>
      </Grid>
      </Grid>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
