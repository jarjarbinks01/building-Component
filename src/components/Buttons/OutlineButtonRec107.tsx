import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  border-Color:#2D9FC3;
  border-Width: 2px;
  border-Style: solid;
  width: 99px;
  height: 38px;
  border-Radius: 19px;

  font-Size: 14px;
  color: #2D9FC3;
  letter-Spacing: 0.5px;
  text-Align: center;
  font-Weight: bold;
  text-Transform: uppercase;

  &:hover {
    background-color: #1DB0DE;
    border-Width: 2;
    border-Color: #1DB0DE;
    box-Shadow: none;
    color: #FFF;
  }
`
  

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
