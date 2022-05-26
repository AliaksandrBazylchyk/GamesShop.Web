import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        background: {
            default:
                'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
            paper: 'rgba(0,0,0,0)',
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
                    color: '#fbe712',
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
