import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { OutlineButtonClearProps } from "./OutlineButtonClear.types";

const StyledButton = styled(Button)`
  border-color: #ffffff;
  border-width: 2px;
  border-style: solid;
  width: 107px;
  height: 38px;
  border-radius: 19px;
  margin: 5px;

  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    border-width: 2px;
    border-color: #cf2e76;
    box-shadow: none;
    background-color: #cf2e76;
    box-shadow: 0px 3px 6px #00000029;
  }
`;

const OutlineButtonClear = ({
  text,
  id,
  onClick,
  ...props
}: OutlineButtonClearProps) => {
  return (
    <StyledButton
      id={id}
      type="button"
      variant="outlined"
      onClick={onClick}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default OutlineButtonClear;
