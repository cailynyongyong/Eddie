import * as React from "react";
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from '../../styles/Profile.module.css';
import firebase, { auth } from '../../firebase/index';


// Profile dropdown for navbar
export default function Profile() {
    // Fields for dropdown
    const fields = [
        {
            field: 'Settings',
            link: '#',
            icon: ''
        },
        {
            field: 'Change Class',
            link: '#',
            icon: ''
        },
        {
            field: 'Sign Out',
            link: '/',
            icon: ''
        }
    ]
   
    // Map fields to react component MenuItem
    const menuItems = fields.map((elem, index) => {
        
        // signs user out
        const logOut = () => {
            // firebase
            auth.signOut();
            window.location.reload(false);
        }
        
        return (
            <MenuItem value={index}>
                <Link 
                    className={styles.link} to={elem.link}
                    onClick={(elem.field === 'Sign Out') ? () => { logOut() } : () => {}}
                >
                    {elem.icon}
                    {elem.field}
                </Link>
            </MenuItem>
        )
    })

    return (
        <FormControl variant="filled" size="small" sx={{ m: 2, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Profile</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
            >
                {menuItems}


            </Select>
        </FormControl>
    );
}