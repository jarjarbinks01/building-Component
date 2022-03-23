import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import {
  Accordions,
  ArrowButton,
  ButtonCom371,
  CircleIconButton,
  ClearButton,
  DashBoardButton,
  DatePickerCommon,
  Navbar,
  OutlineButton,
  OutlineButtonRec107,
  OutlineSearchRec17,
  PrimaryButton,
  SearchButton,
  SelectField,
  TextFields,
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
      
      {/* Outdated */}

      <PrimaryButton text="SUBMIT" />
      <OutlineButton text="BACK" />
      <CircleIconButton />

      {/* Outdated */}

      <ButtonCom371
        id="test371"
        text="FOLLOW UP"
        path="/"
        onClick={() => console.log("hi")}
      />
      <OutlineButtonRec107 id="test filter" text="FILTER" path="/" />
      <OutlineSearchRec17 />
      <ClearButton id="test clear" text="CLEAR" />
      <DashBoardButton text={"Task"}>
        <Task />
      </DashBoardButton>
      <DashBoardButton text={"Member Enquiry"}>
        <MemberEnquiry />
      </DashBoardButton>
      <ArrowButton ariaLabel="arrow" />

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
        <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
        <Box sx={{ typography: 'h1' }}>Color Scheme</Box>
      </Grid>
      <Grid item xs={5} sm={9}>
        <Box sx={{ typography: 'h4' }}>Trustee Portal</Box>
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
          Text.Primary
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: 'text.secondary', color: 'background.paper', p: 2 }}>
          Text.Secondary
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
        <Grid item xs={5} sm={12}>
        <Box sx={{ typography: 'h1' }}>Typography</Box>
      </Grid>
      <Grid item xs={5} sm={12}>
        <Box sx={{ typography: 'h4' }}>Trustee Portal & Admin Portal </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ typography: 'body1' }}>Heading 1</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h1' }}>H1/Roboto/Light/42px</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ typography: 'body1' }}>Heading 2</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h2' }}>H2/Roboto/Medium/26px</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ typography: 'body1' }}>Heading 3</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h3' }}>H3/Roboto/Bold/22px</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ typography: 'body1' }}>Heading 4</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h4' }}>H4/Roboto/Medium/20px</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ typography: 'body1' }}>Heading 5</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'h5' }}>H5/Roboto/Bold/14px</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ typography: 'body1' }}>Body</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'body1' }}>Body/Roboto/Regular/14px</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ typography: 'body1' }}>Input Field Text</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'body2' }}>InputField/Roboto/Bold/16px</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ typography: 'body1' }}>Input Field Hints</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'caption' }}>InputField/Roboto/Italic/16px</Box>
      </Grid>
      <Grid item xs={12} sm={2}>
      <Box sx={{ typography: 'body1' }}>Input Field Alert</Box>
      </Grid>
      <Grid item xs={12} sm={9}>
      <Box sx={{ typography: 'overline' }}>InputField/Roboto/Medium/12px</Box>
      </Grid>
        </Grid>
      </>
    </Router>
  );
}

export default App;
