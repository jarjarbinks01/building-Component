import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: "#D85791",
  borderWidth: 2,
  borderStyle: "solid",
  width: "107px",
  height: "38px",
  borderRadius: "19px",

  fontSize: "14px",
  color: "#CF2E76",
  letterSpacing: "0.5px",
  textAlign: "center",
  textTransform: "uppercase",

  "&:hover": {
    borderWidth: 2,
    borderColor: "#D85791",
    backgroundColor: "#D85791",
    boxShadow: "none",
    color: "#FFF"
  },
}));

const ClearButton = ({
  text,
  id,
}: {
  text: string;
  id: string;
}) => {
  return (
      <StyledButton type="button" variant="outlined">
        {text}
      </StyledButton>
  );
};

export default ClearButton;
