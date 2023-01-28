import React from 'react'
import { TextField } from '@mui/material';

export const TextFieldComponent = ({name, label, value, onChange, error}) => {
  return (
    <TextField
    variant='outlined'
    margin ="dense"
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    error={error}
    helperText={error}
   
    />
  )
}


