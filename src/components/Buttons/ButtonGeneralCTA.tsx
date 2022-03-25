import { Button, styled } from "@mui/material";
import React from "react";
import { ButtonGeneralCTAProps } from "./ButtonGeneralCTA.types";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.secondary.contrastText};
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
}: ButtonGeneralCTAProps) => {
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
