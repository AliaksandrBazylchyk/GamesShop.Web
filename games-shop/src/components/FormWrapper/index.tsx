import React from 'react'
import { Box, Typography } from '@mui/material'

const FormWrapper: React.FC<WrapperProps> = ({
    children,
    title,
}: WrapperProps) => {
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography
                variant="h4"
                style={{ marginLeft: 50, marginRight: 50 }}
            >
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
