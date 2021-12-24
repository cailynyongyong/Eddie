import * as React from "react";
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from "@mui/material/Select";

/**
 * @options filter options for questions
 * @category administrative or conceptual
 * @handleChange function to be called when one of the filters is updated
 */
interface Props {
    options: string[],
    category: string,
    handleChange: any
}

// filter dropdown to sort through questions
export default function SelectButton(props: Props) {

    // map options to Reac MenuItem
    const menuItems = props.options.map((elem, index) => {
        return (<MenuItem value={elem}>{elem}</MenuItem>)
    });

    return (
        <FormControl variant="filled" size="small" sx={{ m: 2, minWidth: 120 }}>
            
            {/* All input label, marked with value '' to signify all */}
            <InputLabel id="demo-simple-select-filled-label">All</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={(e) => props.handleChange(e.target.value, props.category)}
            >

                <MenuItem value=''>
                    <em>All</em>
                </MenuItem>

                {menuItems}

            </Select>
        </FormControl>
    );
}