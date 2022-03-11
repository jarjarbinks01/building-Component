import React, { MouseEventHandler } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  background-Color: #EF841F;
  width: 90px;
  height: 32px;
  border-Radius: 19px;
  padding: 0;

  font-Size: 11px;
  text-Align: center;
  letter-Spacing: 0.39px;
  text-Transform: uppercase;
  font-Weight: bold;

  &:hover {
    background-Color: #EF9F1F;
    box-Shadow: none;
  }
`
  

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
