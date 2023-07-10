import React from 'react'
import SideNave from '../components/SideNave'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';



const About = ({ name, surname, age }) => {


    // console.log(props.prop1)
    return (
        <>
            <NavBar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNave />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>About</h1>
                    <FontAwesomeIcon icon={faCircleCheck} beatFade style={{ color: "#2a9d31", }} />
                    <div>
                        <p>Name: {name}</p>
                        <p>Surname: {surname}</p>
                        <p>Age: {age}</p>
                    </div>

                </Box>
            </Box>
        </>
    )
}
export default About;

About.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number
};