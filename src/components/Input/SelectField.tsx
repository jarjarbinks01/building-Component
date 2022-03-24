import styled from "@emotion/styled";
import { MenuItem, Select } from "@mui/material";
import React from "react";
import { SelectFieldProps } from "./SelectField,types";

const StyledContainer = styled.div``;
const StyledLabel = styled.p`
  color: #42526e;
  font-size: 13px;
  text-align: left;
`;
const StyledPlaceHolder = styled.div`
  font-style: italic;
  color: #9d9d9d;
  opacity: 0.5;
`;

const StyledError = styled.div`
  color: #d32f2f;
`;

const StyledMenuItem = styled(MenuItem)`
  &:focus {
    color: #009ccd;
    font-weight: bold;
  }
`;

const SelectField = ({
  label,
  name,
  id,
  data,
  placeholder,
  value,
  onChange,
  error,
  ...props
}: SelectFieldProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>

      <Select
        {...props}
        displayEmpty
        id={id}
        name={name}
        variant="standard"
        value={value}
        onChange={onChange}
        sx={{ width: "150px" }}
        renderValue={
          value !== ""
            ? undefined
            : () => <StyledPlaceHolder>{placeholder}</StyledPlaceHolder>
        }
      >
        {data.map((item, index) => {
          return (
            <StyledMenuItem key={index} value={item.value}>
              {item.name}
            </StyledMenuItem>
          );
        })}
      </Select>
      {error ? <StyledError>{error}</StyledError> : null}
    </StyledContainer>
  );
};

export default SelectField;
