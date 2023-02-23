import React from 'react'
import SideNave from '../components/SideNave'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';


export default function Settings() {
    return (
        <>
            <NavBar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNave />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Settings</h1>

                </Box>
            </Box>
        </>
    )
}
