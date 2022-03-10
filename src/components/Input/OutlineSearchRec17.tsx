import React from "react";
import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Search = styled("div")(({ theme }) => ({
  borderRadius: "20px",
  backgroundColor: "#fff",
  width: "183px",
  height: "38px",
  borderColor: "#707070",
  borderWidth: "1px",
  borderStyle: "solid",
  display: "flex",
  alignItems: "center",
  padding: '10px',
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
//   position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: '#9D9D9D',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontStyle: "italic",
  fontSize: "16px",
  color: "#9D9D9D",
  textAlign: "left",
}));

const CloseIconWrapper = styled("div")(({ theme }) => ({
    height: "100%",
  //   position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: '#9D9D9D',
}));

const OutlineSearchRec17 = () => {
  return (
    <Search>
    <SearchIconWrapper>
    <SearchIcon sx={{ fontSize: '1.4rem' }}/>
    </SearchIconWrapper>
      <StyledInputBase
        placeholder="Quick Search"
        inputProps={{ "aria-label": "search" }}
      />
      <CloseIconWrapper>
      <CloseIcon sx={{ fontSize: '0.9rem' }}/>
      </CloseIconWrapper>
      
    </Search>
  );
};

export default OutlineSearchRec17;
