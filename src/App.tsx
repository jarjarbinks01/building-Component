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
  LabelButton,
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
      <PrimaryButton text="SUBMIT" />
      <OutlineButton text="BACK" />
      <CircleIconButton />
      <LabelButton />

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
      </>
    </Router>
  );
}

export default App;
