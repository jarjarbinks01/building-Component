import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";
import { TextFieldProps } from "./TextFields.types";

const StyledContainer = styled.div``;
const StyledLabel = styled.p`
  color: #42526e;
  font-size: 13px;
  text-align: left;
`;

const StyledTextField = styled(TextField)`
  & input::placeholder {
    font-style: italic;
    font-size: 16px;
    color: #9d9d9d;
  }
`;

const TextFields = ({
  name,
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  ...props
}: TextFieldProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>

      <StyledTextField
        {...props}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        // label={label ? label : undefined}
        variant="standard"
      />
    </StyledContainer>
  );
};

export default TextFields;
