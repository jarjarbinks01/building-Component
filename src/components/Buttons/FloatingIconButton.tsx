import React, { MouseEventHandler } from "react";
import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { Tooltip } from "@mui/material";

const StyledIconButton = styled(IconButton)`
  width: 50px;
  height: 50px;
  margin: 5px;
`;

const IconImage = styled.img``;

const StyledTooltip = styled((props:any) => (
  <Tooltip classes={{ popper: props.className }} {...props} />
))`
  & .MuiTooltip-tooltip {
    background-color: #42526E;
    box-shadow: 0px 2px 5px #00000029;
    border-radius: 6px;
    font-size: 14px;
  }
`;

const FloatingIconButton = ({
  id,
  ariaLabel,
  onClick,
  src,
  alt,
  ...props
}: {
  id: string;
  ariaLabel: string;
  src: string;
  alt: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
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
