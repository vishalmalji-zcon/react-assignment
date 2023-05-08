import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/NavBar';
import SideNave from '../../components/SideNave';
import { Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel, NativeSelect, Paper, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { cleanProjectCreateState, createProject, fetchProjects } from '../../reduxx/slices/projectslice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';




export default function AddProject() {
    const dispatch = useDispatch();
    const projectCreateSuccess = useSelector((state) => state.project.isProjectCreateFullfilled)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        projectName: '',
        clientName: '',
        projectCost: '',
        projectManager: '',
        ratePerHour: '',
        projectUsers: '',
        description: ''
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    useEffect(() => {
        if (projectCreateSuccess) {
            Swal.fire("Project added", "Your Project hass been added successfully")
                .then((res) => {
                    if (res.value) {
                        dispatch(fetchProjects())
                        dispatch(cleanProjectCreateState())
                        navigate('/projects');
                    }
                })
        }
      }, [projectCreateSuccess, dispatch]);
    
    // {
    //     "projectName"
    //     "clientName"
    //     "projectCost":
    //     "projectManager"
    //     "ratePerHour"
    //     "projectUsers"
    //     "description"
    //     "isActive": true,
    //     "isDeleted": true,
    //     "createdDate"
    //     "createdBy"
    //     "updatedDate"
    //     "updatedBy""
    //   }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        const createProjectObject = formData;
        createProjectObject.isActive = true;
        createProjectObject.isDeleted = false;
        createProjectObject.createdDate = new Date();
        createProjectObject.createdBy = "FE";
        createProjectObject.updatedDate = new Date();
        createProjectObject.updatedBy = "FE";
        dispatch(createProject(formData))
    };

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
                    <h1>Add Project</h1>
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
                                    // value={formData.clientName}
                                    onChange={handleChange}
                                    defaultValue={0}
                                    inputProps={{
                                        name: 'clientName',
                                        id: 'uncontrolled-native',
                                        style: {
                                            width: "900px",
                                        },
                                    }}
                                >
                                    <option>Select</option>
                                    {clientsArray.map((item, index) => {
                                        return (
                                            <option value={item.name}>{item.name}</option>
                                        )
                                    })}
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
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ mt: "5px", mb: "5px" }}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native" >
                                    Project Manager
                                </InputLabel>

                                <NativeSelect
                                    name='projectManager'

                                    onChange={handleChange}
                                    defaultValue={0}
                                    inputProps={{
                                        name: 'projectManager',
                                        id: 'uncontrolled-native',
                                        style: {
                                            width: "900px",
                                        },
                                    }}
                                >
                                    <option>Select</option>
                                    {ProjectManagersArray.map((item, index) => {
                                        return (
                                            <option value={item.name}>{item.name}</option>
                                        )
                                    })}
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
                                        sx={{ mr: "5px" }}

                                    >
                                        Submit
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
