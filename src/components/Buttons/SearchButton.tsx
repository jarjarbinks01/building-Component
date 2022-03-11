import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SearchButton = ({
  text,
  path,
  id,
}: {
  text: string;
  path: string;
  id: string;
}) => {
  return (
    <StyledLink id={id} to={path}>
      <StyledButton type="button" variant="contained" disableElevation>
        {text}
      </StyledButton>
    </StyledLink>
  );
};

export default SearchButton;
