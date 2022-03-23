import React, { useState } from "react";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import styled from "@emotion/styled";
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
`;

const StyledError = styled.div`
  color: #d32f2f;
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
}: SelectFieldProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>

      <Select
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
            <MenuItem key={index} value={item.value}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
      {error ? <StyledError>{error}</StyledError> : null}
    </StyledContainer>
  );
};

export default SelectField;
