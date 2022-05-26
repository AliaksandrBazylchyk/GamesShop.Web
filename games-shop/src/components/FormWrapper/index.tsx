import React from 'react'

import { Box, Typography } from '@mui/material'

import {
    formWrapperHandlerStyles,
    formWrapperLabelStyles,
} from '@styles/FormWrapperStyles'

const FormWrapper: React.FC<WrapperProps> = ({
    children,
    title,
}: WrapperProps) => {
    return (
        <Box style={formWrapperHandlerStyles}>
            <Typography variant="h4" style={formWrapperLabelStyles}>
                {title}
            </Typography>
            {children}
        </Box>
    )
}

type WrapperProps = {
    children: React.ReactNode
    title: string
}

export default FormWrapper
