import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

interface Props {
    options: string[],
    handleChange: any
}

export default function SelectButton(props: Props) {

    const menuItems = props.options.map((elem, index) => {
        return (<MenuItem value={index + 2}>{elem}</MenuItem>)
    });

    return (
        <FormControl variant="filled" size="small" sx={{ m: 2, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">All</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={(e) => props.handleChange(e.target.value)}
            >
                <MenuItem value={1}>
                    <em>All</em>
                </MenuItem>

                {menuItems}


            </Select>
        </FormControl>
    );
}