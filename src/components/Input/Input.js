import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';

const Input = ({ label, value, onChange, type, lw, ...props }) => {
  const dispatch = useDispatch();

  return (
    <FormControl
      variant="outlined"
      error={value.length === 0}
      color="secondary"
    >
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={type}
        value={value}
        onChange={(e) => dispatch(onChange(e.target.value))}
        labelWidth={lw}
        {...props}
      />
      {value.length === 0 && <FormHelperText>{label} required</FormHelperText>}
    </FormControl>
  );
};

export default Input;
