import React from 'react'
import { Button } from '@mui/material'

const FormButton: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
    return <Button variant="outlined">{label}</Button>
}

type ButtonProps = {
    label: string
}

export default FormButton
