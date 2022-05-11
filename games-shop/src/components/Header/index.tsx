import React from 'react'

import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import GroupAddIcon from '@mui/icons-material/GroupAdd'

const Header: React.FC = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                    Shop
                </Typography>
                <Button>
                    Register
                    <GroupAddIcon sx={{ marginLeft: 1 }} />
                </Button>
                <Button>
                    Login
                    <LoginIcon sx={{ marginLeft: 1 }} />
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
