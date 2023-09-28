import { SxProps, TextFieldVariants, Theme } from "@mui/material";
import { ChangeEvent, FocusEvent } from "react";
import {
  Control,
  FieldValues,
  UseControllerProps,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";

export interface BaseRHFProps extends Partial<UseControllerProps> {
  disabled?: boolean;
  required?: boolean;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  setValue?: UseFormSetValue<FieldValues>;
  trigger?: UseFormTrigger<FieldValues>;
  control?: Control<FieldValues>;
}

export interface InputRHFProps extends BaseRHFProps {
  name: string;
  label?: string;
  select?: boolean;
  disabled?: boolean;
  type?: string;
  multiline?: boolean;
  helperText?: string;
  onBlurAction?: (event: FocusEvent<HTMLInputElement>) => void;
  onChangeAction?: (value: string) => void;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocusAction?: () => void;
  fullWidth?: boolean;
  InputProps?: object;
  customError?: boolean;
  placeholder?: string;
  value?: string;
  autoComplete?: string;
  removeAnswer?: () => void;
  disabledRemoveAnswer?: boolean;
  variant?: TextFieldVariants;
}

export interface InputMaskRHFProps extends InputRHFProps {
  mask?: string;
  loading?: boolean;
  size?: number | undefined;
}

export interface AutocompleteOptionsType {
  value: string | number;
  label: string;
  disabled?: boolean;
}
