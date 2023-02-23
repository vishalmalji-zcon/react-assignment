import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material'
import React, { useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Box } from '@mui/system';
import { useAppStore } from '../appStore';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    // const [userName, setUsernam] = useState("");
    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const setUsernam = useAppStore((state) => state.setUser)
    const userName = useAppStore((state) => state.user)

    const handleUsernameChange = (event) => {
        setUsernam(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const loginUser = () => {
        if (userName.length > 0 && password.length > 0) { navigate('/dashboard') }

    }

    const paperStyle = {
        padding: 20, height: '70vh', width: 280, margin: "20px auto"
    }
    const avtarStyle = {
        backgroundColor: "#1976d2"
        // backgroundColor: "primary"
    }
    return (
        <>
            <Grid >
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avtarStyle}><LockOpenIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField variant='standard' label="username" placeholder='Enter User Name'
                        fullWidth sx={{ minWidth: "100%" }} size='small' required
                        value={userName} onChange={handleUsernameChange}
                    />
                    <Box height={20} />
                    <TextField variant='standard' label="password" placeholder='Enter Password' type={"password"}
                        fullWidth sx={{ minWidth: "100%" }} size='small' required
                        value={password} onChange={handlePasswordChange}
                    />
                    <Box height={40} />
                    <Button type="submit" color='primary' variant='contained' fullWidth onClick={loginUser}>
                        Log In
                    </Button>
                    <Box height={50} />
                    <Typography fontSize={"small"}>
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Box height={20} />
                    <Typography fontSize={"small"}> Do you have an account ?
                        <Link href="#" >
                            Sign Up
                        </Link>
                    </Typography>

                </Paper>
            </Grid>
        </>
    )
}
