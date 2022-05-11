import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffe700',
        },
        background: {
            default: '#000000',
        },
        text: {
            primary: '#ffffff',
            secondary: '#808080',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(164,164,164, 0.0)',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    color: '#ffe700',
                    fontSize: '18pt',
                },
                h6: {
                    color: '#ffffff',
                },
            },
        },
    },
})

export default theme
