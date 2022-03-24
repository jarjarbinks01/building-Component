import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { ClearButtonProps } from "./ClearButton.types";

const StyledButton = styled(Button)`
  border-color: #f06363;
  border-width: 2px;
  border-style: solid;
  width: 107px;
  height: 38px;
  border-radius: 19px;

  font-size: 14px;
  color: #f06363;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    border-width: 2px;
    border-color: #f06363;
    background-color: #f06363;
    box-shadow: none;
    color: #fff;
  }
`;

const ClearButton = ({ text, id, onClick, ...props }: ClearButtonProps) => {
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

export default ClearButton;
