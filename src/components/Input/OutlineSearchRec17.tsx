import React from "react";
import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

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

const StyledInputBase = styled(InputBase)`
  font-style: italic;
  font-size: 16px;
  color: #9d9d9d;
  text-align: left;
`;

const CloseIconWrapper = styled.div`
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9d9d9d;
`;

const OutlineSearchRec17 = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ fontSize: "1.4rem" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Quick Search"
        inputProps={{ "aria-label": "search" }}
      />
      <CloseIconWrapper>
        <CloseIcon sx={{ fontSize: "0.9rem" }} />
      </CloseIconWrapper>
    </Search>
  );
};

export default OutlineSearchRec17;
