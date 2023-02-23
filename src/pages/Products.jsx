import React from 'react'
import SideNave from '../components/SideNave'
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductList from './products/ProductList';


export default function Products() {
    return (
        <>
            <NavBar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>

                <SideNave />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Box height={70} />
                    <ProductList />

                </Box>
            </Box>
        </>
    )
}