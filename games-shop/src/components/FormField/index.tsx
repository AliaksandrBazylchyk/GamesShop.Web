import React from 'react'
import { TextField } from '@mui/material'

const FormField: React.FC<FieldProps> = ({
    label,
    value,
    onChange,
    error,
    helperText,
    type,
}: FieldProps) => {
    return (
        <TextField
            margin="normal"
            id={label.toLowerCase()}
            name={label.toLowerCase()}
            label={label}
            variant="standard"
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            type={type}
            fullWidth
        />
    )
}

type FieldProps = {
    label: string
    value: any
    onChange: any
    error: any
    helperText: any
    type: string
}

export default FormField
