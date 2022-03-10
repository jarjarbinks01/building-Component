import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: "grey",
  borderWidth: 2,
  width: "100px",
  color: "grey",
  borderRadius: 20,

  "&:hover": {
    borderWidth: 2,
    borderColor: "grey",
    boxShadow: "none",
  },
}));

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
