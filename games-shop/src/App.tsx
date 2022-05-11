import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'

import Home from '@pages/Home'

import Header from '@components/Header'

import theme from '@styles/Theme'
import appStyles from '@styles/AppStyles'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={appStyles} />
            <Header />
            <Box>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Box>
        </ThemeProvider>
    )
}

export default App
