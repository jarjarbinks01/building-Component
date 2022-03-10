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
  LabelButton,
  Navbar,
  OutlineButton,
  OutlineButtonRec107,
  OutlineSearchRec17,
  PrimaryButton,
  SearchButton,
} from "./components";
import { ReactComponent as Task } from "./assets/icons/Task.svg";
import { ReactComponent as MemberEnquiry } from "./assets/icons/MemberEnquiry.svg";

function App() {
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
        <ArrowButton ariaLabel="arrow"/>
        <Accordions title={'Case For Your Action'} children={"testing"}/>
    </Router>
  );
}

export default App;
