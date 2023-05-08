import React, { useEffect, useState } from 'react'
import SideNave from '../components/SideNave'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { Autocomplete, Button, IconButton, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import EditProject from './project/EditProject';
import {
    getProjects
} from "../Redux/Services/Home";
import { connect } from "react-redux";
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp';
import { useDispatch, useSelector } from "react-redux";
import { cleanProjectCreateState, deleteProject, fetchProjects } from '../reduxx/slices/projectslice';
import Swal from 'sweetalert2';


const customeStyels = {
    headCells: {
        style: {
            fontSize: '15px',
            fontWeight: 'bold',
            // paddingLeft: '0 8px',
            justifyContent: 'center',
        },
    },
}

function ProjectTable(props) {
    const dispatch = useDispatch();
    // const state = useSelector((state) => state)

    const navigate = useNavigate()
    const [search, setSearch] = useState([]);
    // const [projects, setProjects] = useState([]);
    const projects = useSelector(state => state.project.projects)
    const deleteProjectSuccess = useSelector(state => state.project.isProjectDeleteFullfilled)
    const deleteProjectError =  useSelector(state => state.project.prjectdeleteError)
    console.log("--------", projects)
    const [filteredProject, setFilteredProject] = useState([])
    console.log("---------", projects)
    const getProjectss = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v2/all');
            // setProjects(response.data)
            setFilteredProject(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async (projectId) =>{
        console.log("delete",projectId)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                dispatch(deleteProject(projectId))
            }
        });
    }

    useEffect(() => {
        if (deleteProjectSuccess) {
            Swal.fire("Project added", "Your Project hass been deleted successfully")
                .then((res) => {
                    if (res.value) {
                        dispatch(fetchProjects())
                        dispatch(cleanProjectCreateState())
                        navigate('/projects');
                    }
                })
        }
      }, [deleteProjectSuccess, dispatch]);

    const columns = [
        {
            name: "Project Name",
            selector: row => row.projectName,
            sortable: true,
            wrap: true
        },
        {
            name: "Estimated Hours",
            selector: row => '--:--',
            center : true
        },
        {
            name: "Logged Hours",
            selector: row => '--:--',
            center : true
        },
        {
            name: "status",
            selector: row => <></>,
            sortable: true,
            wrap: true,
            
        },
        {
            name: "Jobs",
            selector: row => row.name,
            wrap: true
        },
        {
            name: "Actions",
            cell: (row) => (
                <>
                    {/* <button className='btn btn-outline-primary' onClick={() => navigate("/editProject", { state: { row: row } })}>Edit</button> <br /> */}
                    <Button>
                        <IconButton aria-label="edit" size="small" onClick={() => navigate("/editProject", { state: { row: row } })}>
                            <ModeEditOutlineSharpIcon fontSize="inherit" />
                        </IconButton>
                    </Button>
                    <Button>
                        <IconButton aria-label="delete" size="small" onClick={() =>{handleDelete(row.id)}}>
                            <DeleteOutlineSharpIcon fontSize="inherit" />
                        </IconButton>
                    </Button>
                </>
            )
        },

    ];




    useEffect(() => {
        // getProjectss()
        dispatch(fetchProjects())
    }, [dispatch]);

    useEffect(() => {
        setFilteredProject(projects)
    }, [projects])
    console.log("????????????????????/", filteredProject)
    // useEffect(() => {
    //     if(projects.length > 0){
    //         const result = projects.filter(project => {
    //             return project.name.toLowerCase().match(search.toLowerCase())
    //         })
    //         setFilteredProject(result)
    //     }

    // }, [search]);
    const searchInTable = (e) => {
        setSearch(e)
        const result = projects.filter(project => {
            return project.projectName.toLowerCase().match(search.toLowerCase())
        })
        setFilteredProject(result)
        console.log(e)
    }

    const handleSelect = (row) => {
        console.log(row)

    }

    return (
        <>
            <NavBar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNave />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Stack direction="row" justifyContent="space-between"
                        alignItems="center"
                        spacing={2} ml={"10px"} mr={"10px"} mt={"20px"}>
                        <h4>ProjectTable</h4>
                        <Button sx={{ marginLeft: "800px", backgroundColor: "#6D3EB9" }} variant="contained" onClick={() => navigate('/addProject')}>+ Add Project</Button>
                    </Stack>

                    {/* {projects && <><h1>Hello</h1></>} */}
                    {filteredProject && <><DataTable columns={columns}
                        data={filteredProject} pagination fixedHeader fixedHeaderScrollHeight='400px'
                        selectableRows selectableRowsHighlight highlightOnHover
                        subHeader
                        onSelectedRowsChange={handleSelect}
                        customStyles={customeStyels}

                        subHeaderAlign='right'
                    // subHeaderComponent={
                    //     <input type={"text"}
                    //         placeholder="Search here..."
                    //         className='w-25 form-control'
                    //         value={search}
                    //         // onChange={(e) => { setSearch(e.target.value) }}
                    //         onChange={(e) => { searchInTable(e.target.value) }}
                    //     />}
                    /></>}


                </Box>
            </Box>
        </>
    )
}

export default ProjectTable;