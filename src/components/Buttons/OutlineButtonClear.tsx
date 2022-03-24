import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React, { MouseEventHandler } from "react";

const StyledButton = styled(Button)`
  border-Color: #FFFFFF;
  border-Width: 2px;
  border-Style: solid;
  width: 107px;
  height: 38px;
  border-Radius: 19px;
  margin: 5px;


  font-Size: 14px;
  color: #FFFFFF;
  letter-Spacing: 0.5px;
  text-Align: center;
  font-Weight: bold;
  text-Transform: uppercase;

  &:hover {
    border-Width: 2;
    border-Color: #CF2E76;
    box-Shadow: none;
    background-color: #CF2E76;
    box-shadow: 0px 3px 6px #00000029;
  }
`

const OutlineButtonClear = ({
  text,
  id,
  onClick
}: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  id: string;
}) => {
  return (
      <StyledButton id={id} type="button" variant="outlined" onClick={onClick}>
        {text}
      </StyledButton>
  );
};

export default OutlineButtonClear;
