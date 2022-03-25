import { Button, styled } from "@mui/material";
import React from "react";
import { OutlineButtonRec107Props } from "./OutlineButtonRec107.types";

const StyledButton = styled(Button)`
  border-color: ${(props) => props.theme.palette.primary.main};
  border-width: 2px;
  border-style: solid;
  width: 99px;
  height: 38px;
  border-radius: 19px;

  font-size: 14px;
  color: ${(props) => props.theme.palette.primary.main};
  letter-spacing: 0.5px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: #1db0de;
    border-width: 2;
    border-color: #1db0de;
    box-shadow: none;
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;

const OutlineButtonRec107 = ({
  text,
  id,
  onClick,
  ...props
}: OutlineButtonRec107Props) => {
  return (
    <StyledButton id={id} type="button" variant="outlined" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default OutlineButtonRec107;
