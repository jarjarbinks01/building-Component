import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)`
  border-color: #d85791;
  border-width: 2;
  border-style: solid;
  width: 107px;
  height: 38px;
  border-radius: 19px;

  font-size: 14px;
  color: #cf2e76;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    border-width: 2;
    border-color: #d85791;
    background-color: #d85791;
    box-shadow: none;
    color: #fff;
  }
`;

const ClearButton = ({ text, id }: { text: string; id: string }) => {
  return (
    <StyledButton type="button" variant="outlined">
      {text}
    </StyledButton>
  );
};

export default ClearButton;
