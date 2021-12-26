import * as React from "react";
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from "@mui/material/Select";

/**
 * 
 */
interface Option {
    value: any,
    content: string
}

/**
 * @default title to display on dropdown
 * @options filter options for questions
 * @category administrative or conceptual
 * @handleChange function to be called when one of the filters is updated
 */
interface Props {
    default: string,
    options: Option[],
    category: string,
    handleChange: any
}

// filter dropdown to sort through questions
export default function SelectButton(props: Props) {

    // map options to Reac MenuItem
    const menuItems = props.options.map((elem, index) => {
        return (<MenuItem value={elem.value}>{elem.content}</MenuItem>)
    });

    return (
        <FormControl variant="filled" size="small" sx={{ m: 2, minWidth: 120 }}>
            
            {/* All input label, marked with value '' to signify all */}
            <InputLabel id="demo-simple-select-filled-label">{props.default}</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={(e) => props.handleChange(props.category, e.target.value)}
            >

                {menuItems}

            </Select>
        </FormControl>
    );
}