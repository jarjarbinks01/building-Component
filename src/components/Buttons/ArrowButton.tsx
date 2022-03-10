import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import styled from "@emotion/styled";

const StyledIconButton = styled(IconButton)`
  color: #42526E;
  border-color: #42526E;
  border-width: 2px;
  border-style: solid;
  width: 30px;
  height: 30px;
`;

const ArrowButton = ({ ariaLabel }: { ariaLabel: string }) => {
  return (
    <StyledIconButton aria-label={ariaLabel}>
      <ArrowBackIosNewRoundedIcon sx={{fontSize:'20px'}}/>
    </StyledIconButton>
  );
};

export default ArrowButton;
