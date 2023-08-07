import { useState } from "react";
import { useController } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { InputRHFProps } from "../../models/inputRHF-model";

const InputPasswordRHF = (props: InputRHFProps) => {
  const { label, required, name, control, placeholder, sx, disabled } = props;
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control });
  const { ref } = field;

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      variant="outlined"
      sx={{
        ".MuiFormHelperText-root.Mui-error": {
          m: "5px 0 10px 0",
        },
        ...sx,
      }}
    >
      <InputLabel
        sx={{ color: error ? "#d32f2f" : "rgba(0, 0, 0, 0.6)" }}
        htmlFor="outlined-adornment-password"
      >
        {label}
      </InputLabel>
      <OutlinedInput
        sx={{
          border: " rgba(0, 0, 0, 0.38)",
        }}
        id="outlined-adornment-password"
        type={values.showPassword ? "text" : "password"}
        {...field}
        label={label}
        autoComplete={"off"}
        inputRef={ref}
        error={invalid}
        required={Boolean(required)}
        placeholder={placeholder}
        disabled={disabled}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? (
                <VisibilityOffOutlinedIcon
                  sx={{
                    color: "rgba(0, 0, 0, 0.38)",
                  }}
                />
              ) : (
                <VisibilityOutlinedIcon
                  sx={{
                    color: "rgba(0, 0, 0, 0.38)",
                  }}
                />
              )}
            </IconButton>
          </InputAdornment>
        }
      />

      {!!error?.message && (
        <FormHelperText error id="accountId-error">
          {error?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};
export default InputPasswordRHF;
