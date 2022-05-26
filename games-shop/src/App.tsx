import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'

import Home from '@pages/Home'
import Login from '@pages/Login'

import Header from '@components/Header'

import theme from '@styles/Theme'
import appStyles from '@styles/AppStyles'

const App: React.FC = () => {
    const [stars, setStars] = React.useState<JSX.Element[]>([])
    const createStars = (quantity: number): void => {
        for (let i = 0; i < quantity; i += 1) {
            const star: JSX.Element = <div className="star" key={`${i}-star`} />
            setStars((old) => [...old, star])
        }
    }
    useEffect(() => {
        setStars([])
        createStars(30)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={appStyles} />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
            </Routes>
            <div className="stars">{stars}</div>
        </ThemeProvider>
    )
}

export default App
