import React, { MouseEventHandler } from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  background-color: #ef841f;
  color: #fff;
  width: 107px;
  height: 38px;
  border-radius: 19px;
  margin: 5px;

  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #ef9f1f;
    box-shadow: none;
  }
`;

const ButtonGeneralCTA = ({
  text,
  id,
  onClick,
  ...props
}: {
  text: string;
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <StyledButton
      id={id}
      type="submit"
      variant="contained"
      disableElevation
      onClick={onClick}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default ButtonGeneralCTA;
