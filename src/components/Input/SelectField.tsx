import React, { useState } from "react";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import styled from "@emotion/styled";
import { Controller } from "react-hook-form";
import { SelectFieldProps } from "./SelectField,types";

const StyledContainer = styled.div`
`;
const StyledLabel = styled.p`
  color: #42526e;
  font-size: 13px;
  text-align: left;
`;
const StyledPlaceHolder = styled.div`
  font-style: italic;
  color: #9D9D9D;
`;

const SelectField = ({ control, label, name, id, data, placeholder }: SelectFieldProps) => {
  const [input, setInput] = useState("");

  console.log(input)

  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            displayEmpty
            id={id}
            {...field}
            variant="standard"
            
            onChange={(e) => setInput(e.target.value)}
            renderValue={
              input !== ""
                ? undefined
                : () => <StyledPlaceHolder>{placeholder}</StyledPlaceHolder>
            }
          >
            {data.map((item, index) =>{
              return(
                <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
              )
            })}
          </Select>
        )}
      />
    </StyledContainer>
  );
};

export default SelectField;
