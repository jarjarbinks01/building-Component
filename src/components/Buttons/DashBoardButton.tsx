import React, { MouseEventHandler, ReactNode } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)`
  color: #42526e;
  width: 160px;
  display: flex;
  justify-content: flex-start;

  &:focus {
    color: #ef841f;
    font-weight: bold;
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
  align-items: center;
  fill: currentcolor;
`;

const StyledText = styled.div`
  flex: 0;
  line-height: 17px;
`;

const DashBoardButton = ({
  id,
  text,
  children,
  onClick,
  ...props
}: {
  id: string;
  text: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <StyledButton id={id} variant="text" onClick={onClick} {...props}>
      <StyledSvgContainer>{children}</StyledSvgContainer>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

export default DashBoardButton;
