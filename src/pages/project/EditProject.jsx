import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/NavBar';
import SideNave from '../../components/SideNave';
import { useLocation, useNavigate } from 'react-router-dom';


import { Button, Container, FormControl, FormHelperText, Grid, Input, InputAdornment, InputLabel, NativeSelect, Paper, TextField } from '@mui/material';
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { cleanProjectCreateState, updateProject, fetchProjects } from '../../reduxx/slices/projectslice';
import { useEffect } from 'react';


export default function EditProject() {
    const dispatch = useDispatch();
    const projectUpdateSuccess = useSelector((state) => state.project.isProjectUpdateFullfilled)
    const navigate = useNavigate()
    const {state} = useLocation();
    const {row} = state
    console.log("---------",row)

    const clientsArray = [
        {
            id: 1,
            name: "FNBO"
        },
        {
            id: 2,
            name: "Rehab"
        },
        {
            id: 3,
            name: "David"
        },
        {
            id: 4,
            name: "Ken"
        }
    ];

    const ProjectManagersArray = [
        {
            id: 1,
            name: "Supriya"
        },
        {
            id: 2,
            name: "Ameya"
        },
        {
            id: 3,
            name: "Surekha"
        },
        {
            id: 4,
            name: "Meenal"
        }
    ]

    const [formData, setFormData] = useState({
        id: row.id,
        projectName: row.projectName,
        clientName: row.clientName,
        projectCost: row.projectCost,
        projectManager: row.projectManager,
        ratePerHour:row.ratePerHour,
        projectUsers: row.projectUsers,
        description: row.description,
        updatedDate: new Date()
    });

    /*
id
: 
14
updatedDate
: 
"2023-05-08T04:42:31.199"
    */

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        Swal.fire({
            
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.value) {
                dispatch(updateProject(formData))
            }
        });
        
        // Swal.fire("Project updated", "Your Project hass been updated successfully").then((res) => {if (res.value) navigate('/projects')})
    };

    useEffect(() => {
        if (projectUpdateSuccess) {
            Swal.fire("Project Updated", "Your Project hass been updated successfully")
                .then((res) => {
                    if (res.value) {
                        dispatch(fetchProjects())
                        dispatch(cleanProjectCreateState())
                        navigate('/projects');
                    }
                })
        }
      }, [projectUpdateSuccess, dispatch]);

    const handleCancel = (e) => {
        setFormData({
            projectName: '',
            clientName: '',
            projectCost: '',
            projectManager: '',
            ratePerHour: '',
            projectUsers: '',
            description: ''
        })
        navigate('/projects')
    }

    const testMang = {
        id: 1
    }


    return (
        <>
            <NavBar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNave />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Update Project</h1>
                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 1000,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Typography variant="h6" align="left" gutterBottom>
                            Project Configuration Details
                        </Typography>
                        <form onSubmit={handleSubmit}>

                            <FormControl fullWidth sx={{ mt: "5px", mb: "5px" }}>
                                <TextField
                                    variant='standard'
                                    required
                                    fullWidth
                                    name="projectName"
                                    label="Project Name"
                                    value={formData.projectName}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ mt: "5px", mb: "5px" }}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native" >
                                    Client Name
                                </InputLabel>
                                
                                <NativeSelect
                                name='clientName'
                                value={formData.clientName? formData.clientName : 0}
                                onChange={handleChange}
								// defaultValue={}
								inputProps={{
									name: 'clientName',
									id: 'uncontrolled-native',
									style: {
										width: "900px",
									},
								}}
							>
								<option>Select</option>
								{clientsArray.map((item, index)=>{
                                    return (
                                        <option value={item.name}>{item.name}</option>
                                    )
                                }) }
							</NativeSelect>
                            </FormControl>
                            <FormControl fullWidth sx={{ mt: "5px", mb: "5px" }}>
                                <TextField
                                    fullWidth
                                    variant='standard'
                                    name="projectCost"
                                    label="Project Cost"
                                    value={formData.projectCost}
                                    onChange={handleChange}
                                    type='number'
                                    InputProps={{
                                        startAdornment:<InputAdornment position="start" >$</InputAdornment>,
                                        onWheel: (event) => {
                                            event.preventDefault();
                                          }
                                    }}
                                
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ mt: "5px", mb: "5px" }}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native" >
                                Project Manager
                                </InputLabel>
                                
                                <NativeSelect
                                name='projectManager'
                                value={formData.projectManager ? formData.projectManager : 0}
                                onChange={handleChange}
								// defaultValue={Number(formData.projectManager)}
								inputProps={{
									name: 'projectManager',
									id: 'uncontrolled-native',
									style: {
										width: "900px",
									},
								}}
							>
								<option value={0}>Select</option>
								{ProjectManagersArray.map((item, index)=>{
                                    return (
                                        <option value={item.name}>{item.name}</option>
                                    )
                                }) }
							</NativeSelect>
                            </FormControl>
                            <FormControl fullWidth sx={{ mt: "5px", mb: "5px" }}>
                                <TextField
                                    fullWidth
                                    variant='standard'
                                    name="ratePerHour"
                                    label="Rate Per Hour"
                                    value={formData.ratePerHour}
                                    onChange={handleChange}
                                    type='number'
                                    InputProps={{
                                        startAdornment:<InputAdornment position="start" >$</InputAdornment>
                                    }}
                                />
                            </FormControl>
                            {/* <FormControl fullWidth sx={{ mt: "5px", mb: "5px" }}>
                                <TextField
                                    fullWidth
                                    variant='standard'
                                    name="projectManager"
                                    label="Project Manager"
                                    value={formData.projectManager}
                                    onChange={handleChange}
                                />
                            </FormControl> */}
                            <FormControl fullWidth sx={{ mt: "5px", mb: "5px" }}>
                                <TextField
                                    fullWidth
                                    variant='standard'
                                    name="projectUsers"
                                    label="Project Users"
                                    value={formData.projectUsers}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ mt: "5px", mb: "5px" }}>
                                <TextField
                                    fullWidth
                                    multiline
                                    //   
                                    rows={4}
                                    name="description"
                                    label="Description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <Grid container spacing={1} mt={1} alignItems="center">
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        sx={{mr: "5px"}}

                                    >
                                        Update
                                    </Button>
                                
                                    <Button
                                        type="button"
                                        variant="contained"
                                        color='error'

                                        // sx={{backgroundColor: "#1B1A47"}}
                                        onClick={() => handleCancel()}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>

                        </form>
                    </Paper>
                </Box>
            </Box>
        </>
    )
}
