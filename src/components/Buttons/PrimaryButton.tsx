import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#e1893b",
  width: "100px",
  borderRadius: 20,

  "&:hover": {
    backgroundColor: "#f78e33",
    boxShadow: "none",
  },
}));

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
