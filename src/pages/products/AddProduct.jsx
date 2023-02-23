import { Grid, IconButton, Typography, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import { db } from "../../FireBase.config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

import Swal from "sweetalert2";
import { useAppStore } from '../../appStore';
const categories = [
    {
        value: 'Mobile',
        label: 'Mobile',
    },
    {
        value: 'Laptop',
        label: 'Laptop',
    },
    {
        value: 'Electronics',
        label: 'Electronics',
    },
    {
        value: 'Food',
        label: 'Food',
    },
];

export default function AddProduct({ closeEvent }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    // const [rows, setRows] = useState([]);
    const setRows = useAppStore((state) => state.setRows)
    const empCollectionRef = collection(db, "products");

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const createProduct = async () => {
        await addDoc(empCollectionRef, {
            name: name,
            price: Number(price),
            category: category,
            date: String(new Date())

        })
        setRows([])
        getUsers();
        closeEvent()
        Swal.fire("Product added", "Your proudct hass been added successfully")

    }
    const getUsers = async () => {
        setRows([])
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5' align='center'>
                Add Product
            </Typography>
            <IconButton style={{ position: "absolute", top: '0', right: "0" }}
                onClick={closeEvent}>
                <CloseIcon />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" size='small'
                        sx={{ minWidth: "100%" }} value={name} onChange={handleNameChange}
                        type="text"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Price" variant="outlined" size='small' sx={{ minWidth: "100%" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CurrencyRupeeIcon />
                                </InputAdornment>
                            ),
                        }}
                        type="number"
                        value={price}
                        onChange={handlePriceChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Category" variant="outlined" size='small' sx={{ minWidth: "100%" }}
                        value={category} onChange={handleCategoryChange} type="text" select
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5' align='center'>
                        <Button variant='contained' onClick={createProduct}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ m: 4 }} />
        </>
    )
}

