import React, { MouseEventHandler } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#EF841F",
  width: "90px",
  height: "32px",
  borderRadius: "19px",
  padding: 0,

  fontSize: "11px",
  textAlign: "center",
  letterSpacing: "0.39px",
  textTransform: "uppercase",
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: "#EF9F1F",
    boxShadow: "none",
  },
}));

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ButtonCom371 = ({
  text,
  path,
  id,
  onClick,
}: {
  text: string;
  path: string;
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <StyledLink id={id} to={path}>
      <StyledButton
        type="submit"
        variant="contained"
        disableElevation
        onClick={onClick}
      >
        {text}
      </StyledButton>
    </StyledLink>
  );
};

export default ButtonCom371;
