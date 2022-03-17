import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextFieldProps } from "./TextFields.types";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  
`
const StyledLabel = styled.p`
  color: #42526E;
  font-size: 13px;
  text-align: left;
`

const StyledTextField = styled(TextField)`
  & input::placeholder {
    font-style: italic;
    font-size: 16px;
    color: #9D9D9D;
  }
`

const TextFields = ({
  name,
  id,
  label,
  control,
  placeholder,
  errors,
}: TextFieldProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: {ref, ...field} }) => (
        <StyledTextField
          {...field}
          inputRef={ref}
          placeholder={placeholder}
          id={id}
          // label={label ? label : undefined}
          variant="standard"
          error={errors?.message}
        />
      )}
    />
    </StyledContainer>
  );
};

export default TextFields;
