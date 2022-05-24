import React from 'react'

import { Link } from 'react-router-dom'

import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import GroupAddIcon from '@mui/icons-material/GroupAdd'

const Header: React.FC = () => {
    const theme = useTheme()

    return (
        <AppBar>
            <Toolbar>
                <Typography
                    variant="h1"
                    component="div"
                    sx={{ flexGrow: 1, textDecoration: 'none' }}
                >
                    <Link
                        to="/"
                        style={{
                            textDecoration: 'none',
                            color: theme.palette.text.primary,
                        }}
                    >
                        Shop
                    </Link>
                </Typography>

                <Link
                    to="/register"
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    <Button>
                        Register
                        <GroupAddIcon sx={{ marginLeft: 1 }} />
                    </Button>
                </Link>
                <Link
                    to="/login"
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    <Button>
                        Login
                        <LoginIcon sx={{ marginLeft: 1 }} />
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header
