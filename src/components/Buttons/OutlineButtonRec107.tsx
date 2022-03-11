import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  border-Color: #009CCD;
  border-Width: 2;
  border-Style: solid;
  width: 107px;
  height: 38px;
  border-Radius: 19px;

  font-Size: 14px;
  color: #2D9FC3;
  letter-Spacing: 0.5px;
  text-Align: center;
  font-Weight: bold;
  text-Transform: uppercase;

  &:hover {
    border-Width: 2;
    border-Color: #009CCD;
    box-Shadow: none;
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
