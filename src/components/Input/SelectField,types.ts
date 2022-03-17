import { Control, FieldValues, FormState } from "react-hook-form";

export interface SelectFieldProps {
  id: string;
  name: string;
  label?: string;
  control: Control<FieldValues, any>;
  errors: FormState<FieldValues>["errors"];
  helperText?: string;
  data: {
    name: string;
    value: number;
  }[];
}
