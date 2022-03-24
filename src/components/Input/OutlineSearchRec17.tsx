import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import React from "react";
import { OutlineSearchRec17Props } from "./OutlineSearchRec17.types";

const Search = styled.div`
  border-radius: 20px;
  background-color: #fff;
  width: 183px;
  height: 38px;
  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const SearchIconWrapper = styled.div`
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9d9d9d;
`;

const StyledTextField = styled(TextField)`
  font-size: 16px;
  text-align: left;
  & input::placeholder {
    font-style: italic;
    font-size: 16px;
    color: #9d9d9d;
  }
`;

const CloseIconWrapper = styled.div`
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9d9d9d;
`;

const OutlineSearchRec17 = ({
  name,
  id,
  placeholder,
  ...props
}: OutlineSearchRec17Props) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ fontSize: "1.4rem" }} />
      </SearchIconWrapper>
      <StyledTextField
        name={name}
        id={id}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        variant="standard"
        {...props}
      />
      <CloseIconWrapper>
        <CloseIcon sx={{ fontSize: "0.9rem" }} />
      </CloseIconWrapper>
    </Search>
  );
};

export default OutlineSearchRec17;
