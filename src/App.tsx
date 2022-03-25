import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as Yup from "yup";
import { ReactComponent as MemberEnquiry } from "./assets/icons/MemberEnquiry.svg";
import { ReactComponent as MPFALeftArrow } from "./assets/icons/MPFA_ic_sidemenu_arrow_l.svg";
import { ReactComponent as Task } from "./assets/icons/Task.svg";
import { ReactComponent as TrusteeLeftArrow } from "./assets/icons/Trustee_ic_sidemenu_arrow_l.svg";
import {
  Accordions,
  ArrowButtonMPFA,
  ArrowButtonTrustee,
  ButtonCom371,
  ButtonCTAWithIcon,
  ButtonGeneralCTA,
  ClearButton,
  DashBoardButton,
  DatePickerCommon,
  DropDownAutoComplete,
  Footer,
  Navbar,
  OutlineButtonRec107,
  OutlineSearchRec17,
  SearchButton,
  SelectField,
  TextFields,
} from "./components";
import GlobalStyle from "./globalStyles";
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

const mPFScheme = [
  { title: "All Schemes" },
  { title: "MPF Scheme A" },
  { title: "MPF Scheme B" },
  { title: "MPF Scheme C" },
  { title: "MPF Scheme D" },
  { title: "MPF Scheme E" },
  { title: "MPF Scheme F" },
  { title: "MPF Scheme G" },
];

function App() {
  const formik = useFormik({
    initialValues: {
      refNo: "",
      ApplicationType: "",
      date: null,
      scheme: null,
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
      <Grid container spacing={1}>
        <Grid item sm={2}>
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
          <ArrowButtonTrustee
            id={"leftarrow"}
            ariaLabel="arrow"
            onClick={() => console.log("leftarrow")}
          >
            <TrusteeLeftArrow />
          </ArrowButtonTrustee>
        </Grid>
        <Grid item sm={9}>
          <p>Primary Button</p>
          <ButtonGeneralCTA
            id="ButtonGeneralCTA"
            text="Submit"
            onClick={() => console.log("submit")}
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
          <OutlineButtonRec107
            id="test filter"
            text="FILTER"
            onClick={() => console.log("clear")}
          />
          <OutlineSearchRec17
            name={"quickSearch"}
            id={"quickSearch"}
            placeholder={"Quick Search"}
          />
          <ClearButton
            id="test clear"
            text="CLEAR"
            onClick={() => console.log("clear")}
          />

          <ArrowButtonMPFA
            id={"leftarrow"}
            ariaLabel="arrow"
            onClick={() => console.log("leftarrow")}
          >
            <MPFALeftArrow />
          </ArrowButtonMPFA>

          <Accordions title={"Case For Your Action"}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                <Grid item sm={5}>
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
                </Grid>
                <Grid item sm={5}>
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
                </Grid>
                <Grid item sm={5}>
                  <DatePickerCommon
                    label={"New Document Received Date"}
                    id={"New Document Received Date"}
                    placeholder={"Please Input"}
                    helperText={"DDMMYYYY"}
                    value={formik.values.date}
                    onChange={(value) => formik.setFieldValue("date", value)}
                  />
                </Grid>
                <Grid item sm={5}>
                  <DropDownAutoComplete
                    label={"Select MPF Scheme"}
                    id={"dropdownWithSearch"}
                    value={formik.values.scheme}
                    onChange={(event: any, newValue: any) => {
                      formik.setFieldValue("scheme", newValue);
                    }}
                    options={mPFScheme.map((option) => option.title)}
                    placeholder={"Please Input"}
                  />
                </Grid>
                <Grid item sm={3}>
                  <SearchButton
                    id="test filter"
                    text="SEARCH"
                    onClick={() => console.log("search")}
                  />
                </Grid>
              </Grid>
            </form>
          </Accordions>
        </Grid>
      </Grid>
      <>
        <Button>Test for Theme</Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid container spacing={1}>
          <Grid item xs={5} sm={9}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h1" }}>
              Color Scheme
            </Box>
          </Grid>
          <Grid item xs={5} sm={9}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
              Trustee Portal
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "primary.light",
                color: "primary.contrastText",
                p: 2,
              }}
            >
              Theme #4B5CA5
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                p: 2,
              }}
            >
              Primary #009CCD
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
                p: 2,
              }}
            >
              Secondary #EF841F
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "warning.main",
                color: "warning.contrastText",
                p: 2,
              }}
            >
              Additional 1 #F6354A
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "success.main",
                color: "success.contrastText",
                p: 2,
              }}
            >
              Additional 2 #2FCC71
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{ bgcolor: "info.main", color: "info.contrastText", p: 2 }}
            >
              Additional 3 #F06363
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{ bgcolor: "info.light", color: "info.contrastText", p: 2 }}
            >
              Additional 4 #BCBCBC
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{ bgcolor: "info.dark", color: "info.contrastText", p: 2 }}
            >
              Additional 5 #9D4DE1
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "success.light",
                color: "success.contrastText",
                p: 2,
              }}
            >
              Additional 6 #CF2E76
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{ bgcolor: "text.primary", color: "background.paper", p: 2 }}
            >
              Text.Primary #3D4F76
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "text.secondary",
                color: "background.paper",
                p: 2,
              }}
            >
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
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h1" }}>
              Typography
            </Box>
          </Grid>
          <Grid item xs={5} sm={12}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
              Trustee Portal & Admin Portal{" "}
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
              Heading 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ typography: "h1" }}>H1/Roboto/Light/42px</Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
              Heading 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ typography: "h2" }}>H2/Roboto/Medium/26px</Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
              Heading 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ typography: "h3" }}>H3/Roboto/Bold/22px</Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
              Heading 4
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ typography: "h4" }}>H4/Roboto/Medium/20px</Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
              Heading 5
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ typography: "h5" }}>H5/Roboto/Bold/14px</Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
              Body
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ typography: "body1" }}>Body/Roboto/Regular/14px</Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
              Input Field Text
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ typography: "body2" }}>InputField/Roboto/Bold/16px</Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
              Input Field Hints
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ typography: "caption" }}>
              InputField/Roboto/Italic/16px
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
              Input Field Alert
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ typography: "overline" }}>
              InputField/Roboto/Medium/12px
            </Box>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={5} sm={12}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h1" }}>
              Spacing
            </Box>
          </Grid>
          <Grid item xs={5} sm={12}>
            <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
              Trustee Portal, MPFA Portal & Admin Portal{" "}
            </Box>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Box
              sx={{
                paddingTop: 3,
                paddingBottom: 4,
                paddingRight: 3,
                paddingLeft: 3,
                boxShadow: 3,
                width: "1080px",
                height: "574px",
                bgcolor: (theme) =>
                  theme.palette.mode === "light" ? "#ffffff" : "#f2f2f2",
                color: (theme) =>
                  theme.palette.mode === "light" ? "#EF841F" : "grey.800",
                textAlign: "left",
                borderRadius: "15px",
                fontSize: "26px",
                fontWeight: "700",
              }}
            >
              paddingTop: 3,
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
