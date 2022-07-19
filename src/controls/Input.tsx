import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

interface Props{
  label: string;
  onChange: (e: React.FormEvent<EventTarget>) => void;
  helperText?: string;
  required?: boolean;
  name: string;
  error?: boolean;
  width?: string;
  type?: string;
}

const Input: FC<Props> = ({ label, onChange, helperText, required, name, error, width, type }: Props) => (
    <TextField
      type={type ? type : ''}
      style={{width: width || '100%'}}
      label={label}
      helperText={helperText}
      error={error}
      name={name}
      required={required}
      onChange={onChange}
  />
);

export default Input;
