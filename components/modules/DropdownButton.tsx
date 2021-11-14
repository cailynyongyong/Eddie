import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

interface Props {
    options: string[],
    values: number[]
}

export default function SelectButton(props: Props) {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const menuItems = props.options.map((elem, index) => {
        return (<MenuItem value={props.values[index]}>{elem}</MenuItem>)
    });

    return (
        <FormControl variant="filled" size="small" sx={{ m: 2, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">All</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>All</em>
                </MenuItem>

                {menuItems}


            </Select>
        </FormControl>
    );
}