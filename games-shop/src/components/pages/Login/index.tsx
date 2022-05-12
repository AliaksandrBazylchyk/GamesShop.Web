import React from 'react'

import { Button, Grid } from '@mui/material'

import FormWrapper from '@components/FormWrapper'
import FormField from '@components/FormField'
import FormButton from '@components/FormButton'

const Login: React.FC = () => {
    return (
        <FormWrapper title="In Game">
            <Grid container spacing={1}>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <FormField label="Login" />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <FormField label="Password" />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <FormButton label="Login" />
                </Grid>
            </Grid>
        </FormWrapper>
    )
}

export default Login
