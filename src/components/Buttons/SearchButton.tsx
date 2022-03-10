import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#EF841F",
  width: "107px",
  height: "38px",
  borderRadius: "19px",
  padding: 0,

  fontSize: "14px",
  textAlign: "center",
  letterSpacing: "0.5px",
  textTransform: "uppercase",

  "&:hover": {
    backgroundColor: "#EF9F1F",
    boxShadow: "none",
  },
}));

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SearchButton = ({
  text,
  path,
  id,
}: {
  text: string;
  path: string;
  id: string;
}) => {
  return (
    <StyledLink id={id} to={path}>
      <StyledButton type="button" variant="contained" disableElevation>
        {text}
      </StyledButton>
    </StyledLink>
  );
};

export default SearchButton;
