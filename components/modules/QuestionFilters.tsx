import * as React from "react";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DropdownButton from "./DropdownButton";


export default function Filters() {
    // code to go
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    //


    const questionTypes = ["Administrative", "Conceptual"]
    const questionValues = [10, 20]

    const students = ["Answered","Unanswered"]
    const studentValues = [10, 20]

    return (
        <div>
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Question Type
            </Typography>
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Status
            </Typography>
           <div>
            <DropdownButton options={questionTypes} values={questionValues} />
            <DropdownButton options={students} values={studentValues} />
            </div>
         
        </div>
    );
}