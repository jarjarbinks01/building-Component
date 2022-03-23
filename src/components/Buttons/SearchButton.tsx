import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)`
  background-Color: #EF841F;
  width: 107px;
  height: 38px;
  border-Radius: 19px;
  padding: 0;

  font-Size: 14px;
  text-Align: center;
  letter-Spacing: 0.5px;
  text-Transform: uppercase;

  &:hover {
    background-Color: #EF9F1F;
    box-Shadow: none;
  }
`



const SearchButton = ({
  text,
  id,
}: {
  text: string;
  id: string;
}) => {
  return (
      <StyledButton id={id} type="submit" variant="contained" disableElevation>
        {text}
      </StyledButton>
  );
};

export default SearchButton;
