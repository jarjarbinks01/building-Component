import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import {
  Accordions,
  ArrowButton,
  ButtonCom371,
  ClearButton,
  DashBoardButton,
  DatePickerCommon,
  Footer,
  Navbar,
  OutlineButtonRec107,
  OutlineSearchRec17,
  ButtonGeneralCTA,
  SearchButton,
  SelectField,
  TextFields,
  ButtonCTAWithIcon,
} from "./components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ReactComponent as Task } from "./assets/icons/Task.svg";
import { ReactComponent as MemberEnquiry } from "./assets/icons/MemberEnquiry.svg";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const data = [
  {
    name: "Test Title 1",
    value: 1,
  },
  {
    name: "Test Title 2",
    value: 2,
  },
  {
    name: "Test Title 3",
    value: 3,
  },
  {
    name: "Test Title 4",
    value: 4,
  },
];

function App() {
  const formik = useFormik({
    initialValues: {
      refNo: "",
      ApplicationType: "",
      date: null,
    },
    validationSchema: Yup.object({
      refNo: Yup.string().min(5, "Must be 5 characters at least"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <p>Primary Button</p>
      <ButtonGeneralCTA
        id="ButtonGeneralCTA"
        text="Submit"
        onClick={() => console.log("ButtonGeneralCTA")}
      />
      <ButtonCom371
        id="test371"
        text="FOLLOW UP"
        onClick={() => console.log("hi")}
      />
      <ButtonCTAWithIcon
        id="buttonCTAwifIcon"
        text="Add new scheme"
        onClick={() => console.log("buttonCTAwifIcon")}
      />
      <p>Secondary Button</p>
      <OutlineButtonRec107 id="test filter" text="FILTER" path="/" />
      <OutlineSearchRec17 />
      <ClearButton
        id="test clear"
        text="CLEAR"
        onClick={() => console.log("clear")}
      />
      <DashBoardButton
        id={"task"}
        text={"Task"}
        onClick={() => console.log("task")}
      >
        <Task />
      </DashBoardButton>
      <DashBoardButton
        id={"memberEnquiry"}
        text={"Member Enquiry"}
        onClick={() => console.log("memberEnquiry")}
      >
        <MemberEnquiry />
      </DashBoardButton>
      <ArrowButton
        id={"leftarrow"}
        ariaLabel="arrow"
        onClick={() => console.log("leftarrow")}
      />

      <Accordions title={"Case For Your Action"}>
        <form onSubmit={formik.handleSubmit}>
          <TextFields
            name={"refNo"}
            id={"ref_No"}
            label={"Application Reference No."}
            placeholder={"Please Input"}
            value={formik.values.refNo}
            onChange={formik.handleChange}
            error={formik.touched.refNo && Boolean(formik.errors.refNo)}
            helperText={formik.touched.refNo && formik.errors.refNo}
          />
          <SelectField
            name={"ApplicationType"}
            id={"appl-type"}
            label={"Application Type"}
            placeholder={"Please Input"}
            value={formik.values.ApplicationType}
            onChange={formik.handleChange}
            error={
              formik.touched.ApplicationType &&
              Boolean(formik.errors.ApplicationType)
            }
            data={data}
          />
          <DatePickerCommon
            label={"New Document Received Date"}
            id={"New Document Received Date"}
            placeholder={"Please Input"}
            helperText={"DDMMYYYY"}
            value={formik.values.date}
            onChange={(value) => formik.setFieldValue("date", value)}
          />
          <SearchButton id="test filter" text="SEARCH" />
        </form>
      </Accordions>

      <>
        <Button>Test for Theme</Button>
    <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h1' }}>Trustee Portal</Box>
        <br></br>
        <Grid container spacing={1}>
      <Grid item xs={5} sm={9}>
        <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: 'h4' }}>Color Scheme</Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', p: 2 }}>
          Theme #4B5CA5
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
          Additional 3 #F06363
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'info.light', color: 'info.contrastText', p: 2 }}>
          Additional 4 #BCBCBC
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'info.dark', color: 'info.contrastText', p: 2 }}>
          Additional 5 #9D4DE1
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'success.light', color: 'success.contrastText', p: 2 }}>
          Additional 6 #CF2E76
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
      </>
      <Footer />
    </Router>
  );
}

export default App;
