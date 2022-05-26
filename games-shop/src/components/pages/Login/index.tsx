import React from 'react'
import { useFormik } from 'formik'

import { object, string } from 'yup'

import { Grid } from '@mui/material'

import FormWrapper from '@components/FormWrapper'
import FormField from '@components/FormField'
import FormButton from '@components/FormButton'

import { loginRequest } from '@services/auth.service'

const initialValues = {
    login: '',
    password: '',
}

const Login: React.FC = () => {
    const validationSchema = object({
        login: string()
            .min(5, 'Minimum 6 characters')
            .required('Login is required'),
        password: string()
            .min(8, 'Minimum 8 characters')
            .required('Password is required'),
    })
    const formik = useFormik({
        initialValues: { ...initialValues },
        validationSchema,
        onSubmit: async (values) => {
            loginRequest(values).then((response) => console.log(response.data))
        },
    })

    return (
        <FormWrapper title="In Game!">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item container spacing={1} height="100px">
                        <Grid
                            item
                            xs={6}
                            display="flex"
                            justifyContent="center"
                        >
                            <FormField
                                label="Login"
                                value={formik.values.login}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.login &&
                                    Boolean(formik.errors.login)
                                }
                                helperText={
                                    formik.touched.login && formik.errors.login
                                }
                                type="text"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            display="flex"
                            justifyContent="center"
                        >
                            <FormField
                                label="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.password &&
                                    Boolean(formik.errors.password)
                                }
                                helperText={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                                type="password"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                        <FormButton label="Login" />
                    </Grid>
                </Grid>
            </form>
        </FormWrapper>
    )
}

export default Login
