import { Button, styled } from "@mui/material";
import React from "react";
import { OutlineButtonSaveProps } from "./OutlineButtonSave.types";

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
    border-width: 2;
    border-color: #ef9f1f;
    box-shadow: none;
    background-color: #ef9f1f;
  }
`;

const OutlineButtonSave = ({
  text,
  id,
  onClick,
  ...props
}: OutlineButtonSaveProps) => {
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

export default OutlineButtonSave;
