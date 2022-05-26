import React from 'react'

import { Link } from 'react-router-dom'

import { AppBar, Button, Toolbar, Typography, useTheme } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import GroupAddIcon from '@mui/icons-material/GroupAdd'

import { LinkStyles } from '@styles/LinkStyles'

const Header: React.FC = () => {
    const theme = useTheme()

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                    <Link
                        to="/"
                        style={{
                            ...LinkStyles,
                            color: theme.palette.text.primary,
                        }}
                    >
                        Shop
                    </Link>
                </Typography>

                <Link to="/register" style={LinkStyles}>
                    <Button>
                        Register
                        <GroupAddIcon sx={{ marginLeft: 1 }} />
                    </Button>
                </Link>
                <Link to="/login" style={LinkStyles}>
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
