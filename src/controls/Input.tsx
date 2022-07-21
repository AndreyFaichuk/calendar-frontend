import React, { FC } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

interface Props{
  label: string;
  onChange: (e: React.FormEvent<EventTarget>) => void;
  helperText?: string;
  required?: boolean;
  name: string;
  error?: boolean;
  width?: string;
  type?: string;
  value: string | number | undefined;
}

const Input: FC<Props> = ({
  label, onChange, helperText, required, name, 
  error, width = '100%', type = 'standard', value
}: Props) => (
    <TextField
      value={value}
      type={type}
      style={{width: width}}
      label={label}
      helperText={helperText}
      error={error}
      name={name}
      required={required}
      onChange={onChange}
  />
);

export default Input;
