import styled from "@emotion/styled";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { FloatingIconButtonProps } from "./FloatingIconButton.types";

const StyledIconButton = styled(IconButton)`
  width: 50px;
  height: 50px;
  margin: 5px;
`;

const IconImage = styled.img``;

const StyledTooltip = styled((props: any) => (
  <Tooltip classes={{ popper: props.className }} {...props} />
))`
  & .MuiTooltip-tooltip {
    background-color: #42526e;
    box-shadow: 0px 2px 5px #00000029;
    border-radius: 6px;
    font-size: 14px;
  }
  & .MuiTooltip-arrow {
    color: #42526e;
  }
`;

const FloatingIconButton = ({
  id,
  ariaLabel,
  onClick,
  src,
  alt,
  ...props
}: FloatingIconButtonProps) => {
  return (
    <StyledTooltip title={ariaLabel} placement="top" arrow>
      <StyledIconButton
        type="button"
        id={id}
        onClick={onClick}
        aria-label={ariaLabel}
        {...props}
      >
        <IconImage src={src} alt={alt} />
      </StyledIconButton>
    </StyledTooltip>
  );
};

export default FloatingIconButton;
