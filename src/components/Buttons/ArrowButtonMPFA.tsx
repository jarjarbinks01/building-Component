import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import React from "react";
import { ArrowButtonMPFAProps } from "./ArrowButtonMPFA.types";

const StyledIconButton = styled(IconButton)`
  display: flex;
  align-items: center;
  height: 44px;
  width: 44px;
`;

const StyledSvgContainer = styled.div`
  display: flex;
  margin-top: 5px; //temp style
  circle {
    fill: #fff;
  }
  path {
    fill: #42526e;
  }
  &:hover circle {
    fill: #42526e;
  }
  &:hover path {
    fill: #fff;
  }
`;

const ArrowButtonMPFA = ({
  id,
  ariaLabel,
  onClick,
  children,
  ...props
}: ArrowButtonMPFAProps) => {
  return (
    <StyledIconButton
      id={id}
      aria-label={ariaLabel}
      type="button"
      onClick={onClick}
      {...props}
    >
      <StyledSvgContainer>{children}</StyledSvgContainer>
    </StyledIconButton>
  );
};

export default ArrowButtonMPFA;
