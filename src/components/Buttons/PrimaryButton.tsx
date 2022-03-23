import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  background-color: #e1893b;
  color: #FFF;
  width: 100px;
  border-radius: 20px;

  &:hover {
    background-color: #f78e33;
    box-shadow: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const PrimaryButton = ({ text }: { text: string }) => {
  return (
    <StyledLink to="/">
      <StyledButton type="submit" variant="contained" disableElevation>
        {text}
      </StyledButton>
    </StyledLink>
  );
};

export default PrimaryButton;
