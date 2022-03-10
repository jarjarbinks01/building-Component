import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)((theme) => ({
  color: "#42526E",
  width: "160px",
  display: "flex",
  justifyContent: "flex-start",

  "&:focus": {
    color: "#EF841F",
    "&:hover, &.Mui-focusVisible": {
      borderWidth: 2,
      borderRadius: "5px",
      boxShadow: "none",
      color: "#FFF",
    },
  },
  "&:hover, &.Mui-focusVisible": {
    borderWidth: 2,
    borderRadius: "5px",
    backgroundColor: "#EF841F",
    boxShadow: "none",
    color: "#FFF",
  },
}));

const StyledSvgContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  fill: "currentcolor",
}));

const StyledText = styled("div")`
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
