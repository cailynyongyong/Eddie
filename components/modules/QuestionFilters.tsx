import * as React from "react";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DropdownButton from "./DropdownButton";

interface Props {
    updateType: any,
    updateStatus: any
}


export default function Filters(props: Props) {


    const questionTypes = ["Administrative", "Conceptual"]
    const answered = ["Answered","Unanswered"]

    return (
        <div>
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Question Type
            </Typography>
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Status
            </Typography>
           <div>
            <DropdownButton options={questionTypes} handleChange={props.updateType}/>
            <DropdownButton options={answered} handleChange={props.updateStatus}/>
            </div>
         
        </div>
    );
}