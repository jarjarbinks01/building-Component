import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DatePicker";
import { DatePickerCommonProps } from "./DatePickerCommon.types";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

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

export default function DatePickerCommon({
  label,
  id,
  placeholder,
  helperText,
  value,
  onChange
}: DatePickerCommonProps) {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledContainer>
        <StyledLabel>{label}</StyledLabel>

        <DesktopDatePicker
          value={value}
          inputFormat="dd/MM/yyyy"
          onChange={onChange}
          renderInput={(params) => (
            <StyledTextField
              id={id}
              variant="standard"
              {...params}
              inputProps={{ ...params.inputProps, placeholder: placeholder }}
              helperText={helperText}
            />
          )}
        />
      </StyledContainer>
    </LocalizationProvider>
  );
}
