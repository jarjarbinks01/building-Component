import styled from "@emotion/styled";
import { Autocomplete, Paper, TextField } from "@mui/material";
import React from "react";
import { DropDownAutoCompleteProps } from "./DropDownAutoComplete.types";

const StyledContainer = styled.div`
  width: 40%;
`;
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

const StyledPaper = styled(Paper)``;

const DropDownAutoComplete = ({
  label,
  options,
  id,
  placeholder,
  value,
  onChange,
  ...props
}: DropDownAutoCompleteProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <Autocomplete
        {...props}
        options={options}
        id={id}
        value={value}
        onChange={onChange}
        autoHighlight
        PaperComponent={({ children }) => <StyledPaper>{children}</StyledPaper>}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            placeholder={placeholder}
            variant="standard"
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
    </StyledContainer>
  );
};

export default DropDownAutoComplete;
