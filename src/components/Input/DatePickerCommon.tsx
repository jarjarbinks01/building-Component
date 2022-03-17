import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DatePicker";
import { Controller } from "react-hook-form";
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
    color: #9D9D9D;
  }
`

export default function DatePickerCommon({
  name,
  control,
  label,
  id,
  placeholder,
  helperText
}: DatePickerCommonProps) {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledContainer>
        <StyledLabel>{label}</StyledLabel>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field: { ref, ...field } }) => (
            <DesktopDatePicker
              {...field}
              value={value}
              ref={ref}
              inputFormat="dd/MM/yyyy"
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <StyledTextField
                  id={id}
                  variant="standard"
                  {...params}
                  inputProps={{...params.inputProps, placeholder:placeholder}}
                  helperText={helperText}
                />
              )}
            />
          )}
        />
      </StyledContainer>
    </LocalizationProvider>
  );
}
