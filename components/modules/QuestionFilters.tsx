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
    const questionTypes = [
        {
            value: undefined,
            content: 'All'
        },
        {
            value: "administrative",
            content: 'Administrative'
        }, 
        {
            value: "conceptual",
            content: 'Conceptual'
        }
    ]
    const answered = [
        {
            value: undefined,
            content: 'All'
        },
        {
            value: true,
            content: 'Answered'
        },
        {
            value: false,
            content: 'Unanswered'
        }
    ]

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
                    default={'All'}
                    options={questionTypes}
                    category='questionType'
                    handleChange={props.update}
                />
                <DropdownButton
                    default={'All'}
                    options={answered}
                    category='answered'
                    handleChange={props.update}
                />
            </div>

        </div>
    );
}