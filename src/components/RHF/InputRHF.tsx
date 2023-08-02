import { ChangeEvent, FocusEvent } from 'react'
import { useController } from 'react-hook-form'
import TextField from '@mui/material/TextField'

import { InputRHFProps } from '../../models/inputRHF-model'

export default function InputRHF(props: InputRHFProps) {
  const {
    required,
    name,
    control,
    sx,
    children,
    disabled,
    helperText,
    onBlurAction,
    onChangeAction,
    onFocusAction,
    defaultValue,
    customError,
    ...rest
  } = props
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control, defaultValue })
  const { ref, onBlur, onChange, value, ...otheProps } = field
  const onBlurPropagator = (event: FocusEvent<HTMLInputElement>) => {
    onBlur()
    onBlurAction && onBlurAction(event)
  }

  const onChangePropagator = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(event.target.value)
    onChangeAction && onChangeAction(event.target.value)
  }
  return (
    <TextField
      {...otheProps}
      value={value ?? ''}
      margin="dense"
      disabled={disabled}
      onBlur={onBlurPropagator}
      onChange={onChangePropagator}
      onFocus={onFocusAction}
      inputRef={ref}
      error={invalid || customError}
      helperText={error?.message || helperText}
      FormHelperTextProps={{ 'aria-live': invalid ? 'polite' : 'off' }}
      required={Boolean(required)}
      {...(disabled
        ? {
            InputProps: { readOnly: true, color: 'secondary' },
            inputProps: { 'aria-disabled': true },
            InputLabelProps: { color: 'secondary' },
            sx: {
              '.MuiFormHelperText-root.Mui-error': {
                m: 0,
              },
              ...sx,
              '& input': { color: 'text.disabled' },
            },
          }
        : { sx })}
      sx={{
        '.MuiFormHelperText-root.Mui-error': {
          m: '5px 0 10px 0',
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </TextField>
  )
}
