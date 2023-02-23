import React from 'react'
import SideNave from '../components/SideNave'
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAppStore } from '../appStore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';


export default function Home() {
    const userName = useAppStore((state) => state.user)
    const cardStyle = {
        padding: "30px auto",
        margin: "40px auto"
    }
    return (
        <>
            <NavBar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>

                <SideNave />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Home </h1>
                    <Divider></Divider>
                    <Box height={20} />
                    <Typography variant="h4" color={""} component="h2" fontWeight={"bold"}>Welcome {userName}</Typography>
                    <div style={cardStyle}>
                        <Card sx={{ maxWidth: 345 }} >

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontWeight={"bold"}>
                                    Todays Quote
                                </Typography>
                                <Divider></Divider>
                                <Box height={20} />
                                <Typography fontWeight={"bolder"}>START AS IF YOU KNOW NOTHING
                                </Typography>
                                <Box height={30} />
                                <Typography variant="body2" color="text.secondary">
                                    Forget all you know about yourself; forget all you have ever thought about yourself; start as if you know nothing.
                                </Typography>
                                <Typography variant="body2" align='right'>
                                    - Krishnamurti
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>

                </Box>
            </Box>
        </>
    )
}
