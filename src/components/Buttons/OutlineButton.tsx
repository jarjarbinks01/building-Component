import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  border-Color: grey;
  border-Width: 2;
  width: 100px;
  color: grey;
  border-Radius: 20px;

  &:hover {
    border-Width: 2;
    border-Color: grey;
    box-Shadow: none;
  }
`
  

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const OutlineButton = ({ text }: { text: string }) => {
  return (
   
      <StyledLink to="/">
        <StyledButton type="button" variant="outlined">
          {text}
        </StyledButton>
      </StyledLink>
  );
};

export default OutlineButton;
