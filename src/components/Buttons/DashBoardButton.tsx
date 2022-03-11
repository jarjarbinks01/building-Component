import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  color: #42526e;
  width: 160px;
  display: flex;
  justify-content: flex-start;

  &:focus {
    color: #ef841f;
    &:hover,
    &.Mui-focusVisible {
      border-width: 2;
      border-radius: 5px;
      box-shadow: none;
      color: #fff;
    }
  }
  &:hover,
  &.Mui-focusVisible {
    border-width: 2;
    border-radius: 5px;
    background-color: #ef841f;
    box-shadow: none;
    color: #fff;
  }
`;

const StyledSvgContainer = styled.div`
    display: flex;
  align-Items: center;
  fill: currentcolor;

`
  

const StyledText = styled.div`
  flex: 0;
  line-height: 17px;
`;

const DashBoardButton = ({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}) => {
  return (
    <StyledButton variant="text">
      <StyledSvgContainer>{children}</StyledSvgContainer>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

export default DashBoardButton;
