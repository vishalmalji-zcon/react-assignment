import React from 'react'
import SideNave from '../components/SideNave'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';


export default function About() {
    return (
        <>
            <NavBar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
            <SideNave />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>About</h1>
                    <FontAwesomeIcon icon={faCircleCheck} beatFade style={{color: "#2a9d31",}} />
                    


                </Box>
            </Box>
        </>
    )
}
