import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import SideNave from '../../components/SideNave'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const initialValues = {
    projectName: '',
    clientName: '',
    projectCost: '',
    projectManager: '',
    ratePerHour: '',
    projectUsers: '',
    description: ''
};

const validateForm = (values) => {
    const errors = {};

    if (!values.projectName) {
        errors.projectName = 'Project Name is required';
    }

    if (!values.clientName) {
        errors.clientName = 'Client Name is required';
    }

    if (!values.projectCost) {
        errors.projectCost = 'Project Cost is required';
    } else if (isNaN(values.projectCost)) {
        errors.projectCost = 'Project Cost must be a number';
    }

    if (!values.projectManager) {
        errors.projectManager = 'Project Manager is required';
    }

    if (!values.ratePerHour) {
        errors.ratePerHour = 'Rate per Hour is required';
    } else if (isNaN(values.ratePerHour)) {
        errors.ratePerHour = 'Rate per Hour must be a number';
    }

    if (!values.projectUsers) {
        errors.projectUsers = 'Project Users is required';
    } else if (isNaN(values.projectUsers)) {
        errors.projectUsers = 'Project Users must be a number';
    }

    if (!values.description) {
        errors.description = 'Description is required';
    }

    return errors;
};

const onSubmit = (values) => {
    console.log(values);
    // Perform form submission logic here
};



const AddProjectFormik = () => {

    const navigate = useNavigate()

    const handleCancel = (formik) => {
        formik.handleReset()
        navigate('/projects')
    };
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
                        <div>
                            <Formik
                                initialValues={initialValues}
                                validate={validateForm}
                                onSubmit={onSubmit}
                            >
                                {(formik) => (
                                    <Form>
                                        <div>
                                            <label htmlFor="projectName">Project Name</label>
                                            <Field type="text" id="projectName" name="projectName" />
                                            <ErrorMessage name="projectName" component="div" />
                                        </div>

                                        <div>
                                            <label htmlFor="clientName">Client Name</label>
                                            <Field type="text" id="clientName" name="clientName" />
                                            <ErrorMessage name="clientName" component="div" />
                                        </div>

                                        <div>
                                            <label htmlFor="projectCost">Project Cost</label>
                                            <Field type="text" id="projectCost" name="projectCost" />
                                            <ErrorMessage name="projectCost" component="div" />
                                        </div>

                                        <div>
                                            <label htmlFor="projectManager">Project Manager</label>
                                            <Field type="text" id="projectManager" name="projectManager" />
                                            <ErrorMessage name="projectManager" component="div" />
                                        </div>

                                        <div>
                                            <label htmlFor="ratePerHour">Rate per Hour</label>
                                            <Field type="text" id="ratePerHour" name="ratePerHour" />
                                            <ErrorMessage name="ratePerHour" component="div" />
                                        </div>

                                        <div>
                                            <label htmlFor="projectUsers">Project Users</label>
                                            <Field type="text" id="projectUsers" name="projectUsers" />
                                            <ErrorMessage name="projectUsers" component="div" />
                                        </div>

                                        <div>
                                            <label htmlFor="description">Description</label>
                                            <Field as="textarea" id="description" name="description" />
                                            <ErrorMessage name="description" component="div" />
                                        </div>

                                        <button type="submit">Submit</button>
                                        <button type="button" onClick={() => handleCancel(formik)}>
                                            Cancel
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </Paper>
                </Box>
            </Box>
        </>
    )
};

export default AddProjectFormik;
