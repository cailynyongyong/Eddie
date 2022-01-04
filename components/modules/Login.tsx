import React from 'react';
import { Box, Typography } from '@mui/material';
import SignUp from '../../auth/SignUpPage';
import AdbIcon from '@mui/icons-material/Adb';
import styles from '../../styles/SignUp.module.css';

interface Props {
    authenticate: any
}

export default function Login(props: Props) {


    return (
        <Box
            sx={
                {
                    marginTop: '45px',
                    paddingLeft: '20px'
                }
            }
        >

            <Typography 
                variant="h3" 
                noWrap 
                component="div"
                display='inline'
            >
                Welcome to Eddie!
            </Typography>
            <AdbIcon id={styles.logo}/>

            <p>
                To view the questions, please sign in below!
            </p>

            <div id={styles.btnContainer}>
                <SignUp authenticate={props.authenticate} />
            </div>
        </Box>
    );
}