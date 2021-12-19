import * as React from "react";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DropdownButton from "./DropdownButton";

interface Props {
    update: any
}


export default function Filters(props: Props) {


    const questionTypes = ["administrative", "conceptual"]
    const answered = ["answered", "unanswered"]

    return (
        <div>
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Question Type
            </Typography>
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Status
            </Typography>
            <div>
                <DropdownButton
                    options={questionTypes}
                    category='questionType'
                    handleChange={props.update}
                />
                <DropdownButton
                    options={answered}
                    category='answered'
                    handleChange={props.update}
                />
            </div>

        </div>
    );
}