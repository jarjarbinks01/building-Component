import React from "react";
import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { ReactComponent as LeftArrow } from "../../assets/icons/MPFA_ic_sidemenu_arrow_l.svg";

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

const ArrowButton = ({ ariaLabel }: { ariaLabel: string }) => {
  return (
    <StyledIconButton  aria-label={ariaLabel}>
      <StyledSvgContainer>
        <LeftArrow />
      </StyledSvgContainer>
    </StyledIconButton>
  );
};

export default ArrowButton;
