import * as React from "react";
import Typography from "@mui/material/Typography";
import DropdownButton from "./DropdownButton";

/**
 * @update function to change the filters needed
 */
interface Props {
    update: any
}

// Filters to show only certain questions on main page
export default function Filters(props: Props) {

    // filter categories
    const questionTypes = ["administrative", "conceptual"]
    const answered = ["answered", "unanswered"]

    return (
        <div>

            {/* Button titles */}
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Question Type
            </Typography>
            <Typography sx={{ m: 3 }} color="text.secondary" display="inline">
                Status
            </Typography>

            {/* Drowdowns for both */}
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