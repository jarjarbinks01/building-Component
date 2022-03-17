import { Control, FieldValues, FormState } from "react-hook-form";

export interface TextFieldProps {
  id: string;
  name: string;
  label?: string;
  control: Control<FieldValues, any>;
  placeholder?: string;
  errors: FormState<FieldValues>["errors"];
  helperText?: string;
}
