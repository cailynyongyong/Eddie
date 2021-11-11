import * as React from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import SelectButton from "./SelectButton";


export default function Filters() {
    // code to go
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    //


    const questionTypes = ["Administrative", "Conceptual"]
    const questionValues = [10, 20]

    const students = ["Cailyn", "Pedro", "Rachel"]
    const studentValues = [10, 20, 30]

    return (
        <div>
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Question Type
            </Typography>
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Student
            </Typography>
            <div>
                <SelectButton options={questionTypes} values={questionValues} />
                <SelectButton options={students} values={studentValues} />

            </div>
        </div>
    );
}