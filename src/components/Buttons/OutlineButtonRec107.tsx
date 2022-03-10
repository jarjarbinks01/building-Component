import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: "#009CCD",
  borderWidth: 2,
  borderStyle: "solid",
  width: "107px",
  height: "38px",
  borderRadius: "19px",

  fontSize: "14px",
  color: "#2D9FC3",
  letterSpacing: "0.5px",
  textAlign: "center",
  fontWeight: "bold",
  textTransform: "uppercase",

  "&:hover": {
    borderWidth: 2,
    borderColor: "#009CCD",
    boxShadow: "none",
  },
}));

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const OutlineButtonRec107 = ({
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
      <StyledButton type="button" variant="outlined">
        {text}
      </StyledButton>
    </StyledLink>
  );
};

export default OutlineButtonRec107;
