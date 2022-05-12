import React from 'react'
import { TextField } from '@mui/material'

const FormField: React.FC<FieldProps> = ({ label }: FieldProps) => {
    return (
        <TextField
            id={`${label.toLowerCase()}-field`}
            label={label}
            variant="standard"
        />
    )
}

type FieldProps = {
    label: string
}

export default FormField
