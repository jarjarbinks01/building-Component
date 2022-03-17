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
import { ReactComponent as Task } from "./assets/icons/Task.svg";
import { ReactComponent as MemberEnquiry } from "./assets/icons/MemberEnquiry.svg";
import { useForm } from "react-hook-form";

const data = [
  {
    name: 'Test Title 1',
    value: 1,
  },
  {
    name: 'Test Title 2',
    value: 2,
  },
  {
    name: 'Test Title 3',
    value: 3,
  },
  {
    name: 'Test Title 4',
    value: 4,
  },
]

function App() {
  const {
    control,
    formState: { errors },
  } = useForm();

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
      <SearchButton id="test filter" text="SEARCH" path="/" />
      <ClearButton id="test clear" text="CLEAR" />
      <DashBoardButton text={"Task"}>
        <Task />
      </DashBoardButton>
      <DashBoardButton text={"Member Enquiry"}>
        <MemberEnquiry />
      </DashBoardButton>
      <ArrowButton ariaLabel="arrow" />

      <Accordions title={"Case For Your Action"}>
        <TextFields
          name={"Application-Reference-No"}
          id={"RefNo"}
          label={"Application Reference No."}
          control={control}
          placeholder={"Please Input"}
          errors={errors}
        />
        <SelectField
          name={"Application-type"}
          id={"applicationType"}
          label={"Application Type"}
          errors={errors}
          control={control}
          data={data}
        />
        <DatePickerCommon />
      </Accordions>
    </Router>
  );
}

export default App;
