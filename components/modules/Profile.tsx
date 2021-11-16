import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { Link } from 'react-router-dom';
import styles from '../../styles/Profile.module.css';

export default function Profile() {
    const items = ['Settings', 'Change Class', 'Sign Out']
    const links = ['', '', '/auth/signup']
    const icons = ['', '', '']  // To fill later if need be

    const menuItems = items.map((elem, index) => {
        return (
            <MenuItem value={index}>
                <Link className={styles.link} to={links[index]}>
                    {icons[index]}
                    {elem}
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